import {
  differenceInSeconds,
  formatDistance,
  formatDistanceStrict,
  formatRelative,
} from "date-fns";
import * as React from "react";
import {
  ReactNode,
  useContext,
  useDebugValue,
  useEffect,
  useRef,
  useState,
} from "react";

type DateLike = Date | number | string;

const DateFnsContext = React.createContext<{
  locale?: Locale;
  baseDate?: DateLike;
}>({});

/**
 * A React Context for date-fns functionality. Used to override locale and to set the baseDate for testing purposes.
 */
export function DateFnsProvider({
  locale,
  baseDate,
  children,
}: {
  /** The default locale used to format dates */
  locale?: Locale;
  /**  date used for comparison with relative dates. Useful to set for tests */
  baseDate?: DateLike;
  /** React contents */
  children: ReactNode;
}) {
  return (
    <DateFnsContext.Provider value={{ locale, baseDate }}>
      {children}
    </DateFnsContext.Provider>
  );
}

/**
 * Performs the argument calculation periodically and returns the result as
 * React state. The frequency of the calculation depends on the difference
 * between the `date` argument and the `baseDate` (default: current date).
 * When the date is close to now, the `calculation` recalculates more
 * frequently. At most calls `calculation` about once per second. If
 * `baseDate` is provided, the value is only calculated once and never update.
 *
 * @param date The date used for date-fns calculations. Passed to calculation
 * @param calculation A function used to calculate the target value
 *  The calculation is passed the `date`, a `baseDate` and the `locale`
 * @param opts `baseDate` and `locale` used to override the context or current
 *  date (optional). If `baseDate` is provided, the result is never updated
 */
export function useDateFunction<T>(
  date: DateLike,
  calculation: (date: Date, baseDate: Date, locale?: Locale) => T,
  opts: { baseDate?: DateLike; locale?: Locale } = {}
): T {
  useDebugValue(date, (date) => new Date(date).toISOString());
  const context = useContext(DateFnsContext);

  function calculateValue() {
    return calculation(
      new Date(date),
      new Date(opts.baseDate || context.baseDate || new Date()),
      opts.locale || context.locale
    );
  }

  /**
   * Returns the delay before next update based on the difference between
   * the `baseDate` and `date` value. If less than 30 seconds, update every
   * second, if less than 2 minutes, update every 2 seconds, otherwise
   * update every minute. These rules are subject to change
   */
  function delay(date: DateLike) {
    const baseDate = opts.baseDate || context.baseDate || new Date();
    const seconds = Math.abs(
      differenceInSeconds(new Date(date), new Date(baseDate))
    );
    return seconds < 30 ? 1000 : seconds < 120 ? 2000 : 60000;
  }

  function scheduleTimer() {
    setValue(calculateValue());
    timer.current = setTimeout(scheduleTimer, delay(date));
  }

  const [value, setValue] = useState(() => calculateValue());
  const timer = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (opts.baseDate || context.baseDate) {
      return;
    }
    scheduleTimer();
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clearTimeout(timer.current!);
    };
  }, []);

  return value;
}

/**
 * Calls the `formatDistance` function from date-fns periodically, updating
 * the returned value when needed
 *
 * @param date value passed to date-fns `formatDistance`
 * @param options `includeSeconds`, `addSuffix` and `locale`. Passed to `formatDistance`
 */
export function useFormatDistance(
  date: DateLike,
  options?: {
    includeSeconds?: boolean;
    addSuffix?: boolean;
    locale?: Locale;
  }
): string {
  return useDateFunction(date, (date, baseDate, locale) =>
    formatDistance(date, baseDate, { ...options, locale })
  );
}

/**
 * Returns a &lt;time&gt; component with the formatted distance to the specified date
 *
 * @param options `date`, `includeSeconds`, `addSuffix` and `locale`. Passed to `formatDistance`
 */
export function FormatDistance(options: {
  date: DateLike;
  includeSeconds?: boolean;
  addSuffix?: boolean;
  locale?: Locale;
}) {
  const { date, locale, addSuffix, includeSeconds } = options;
  const text = useFormatDistance(date, { locale, addSuffix, includeSeconds });
  return <time dateTime={new Date(date).toISOString()}>{text}</time>;
}

/**
 * Calls the `formatDistanceStrict` function from date-fns periodically, updating
 * the returned value when needed
 *
 * @param date value passed to date-fns `formatDistance`
 * @param options `addSuffix`, `unit`, `roundingMethod` and `locale`. Passed to `formatDistanceStrict`
 */
export function useFormatDistanceStrict(
  date: DateLike,
  options?: {
    addSuffix?: boolean;
    unit?: "second" | "minute" | "hour" | "day" | "month" | "year";
    roundingMethod?: "floor" | "ceil" | "round";
    locale?: Locale;
  }
): string {
  return useDateFunction(date, (date, baseDate, locale) =>
    formatDistanceStrict(date, baseDate, { ...options, locale })
  );
}

/**
 * Returns a &lt;time&gt; component with the strict formatted distance to the specified date
 *
 * @param options `date`, `addSuffix`, `unit`, `roundingMethod` and `locale`. Passed to `formatDistanceStrict`
 */
export function FormatDistanceStrict(options: {
  date: DateLike;
  addSuffix?: boolean;
  unit?: "second" | "minute" | "hour" | "day" | "month" | "year";
  roundingMethod?: "floor" | "ceil" | "round";
  locale?: Locale;
}) {
  const { date, locale, addSuffix, unit, roundingMethod } = options;

  const text = useFormatDistanceStrict(date, {
    locale,
    addSuffix,
    unit,
    roundingMethod,
  });
  return <time dateTime={new Date(date).toISOString()}>{text}</time>;
}

/**
 * Calls the `formatRelative` function from date-fns periodically, updating
 * the returned value when needed
 *
 * @param date value passed to date-fns `formatRelative`
 * @param options `weekStartsOn` and `locale`. Passed to `formatRelative`
 */
export function useFormatRelative(
  date: DateLike,
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }
): string {
  return useDateFunction(date, (date, baseDate, locale) =>
    formatRelative(date, baseDate, { ...options, locale })
  );
}

/**
 * Returns a &lt;time&gt; component with the formatted relative to the specified date
 *
 * @param options `date`, `weekStartsOn` and `locale`. Passed to `formatRelative`
 */
export function FormatRelative(options: {
  date: DateLike;
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const { date, locale, weekStartsOn } = options;
  const text = useFormatRelative(date, { locale, weekStartsOn });
  return <time dateTime={new Date(date).toISOString()}>{text}</time>;
}
