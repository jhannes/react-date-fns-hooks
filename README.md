react-date-fns-hooks
====================

[![Node.js CI](https://github.com/jhannes/react-date-fns-hooks/actions/workflows/node.yml/badge.svg)](https://github.com/jhannes/react-date-fns-hooks/actions/workflows/node.yml)
[![Storybook](media/storybook-badge.svg)](https://jhannes.github.io/react-date-fns-hooks/storybook/)
[![npm package](https://img.shields.io/npm/v/react-date-fns-hooks.svg)](https://www.npmjs.com/package/react-date-fns-hooks)


[See it in action](https://jhannes.github.io/react-date-fns-hooks/)

### Installing

`npm install --save date-fns react-date-fns-hooks`

### Quick start - components

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {FormatRelative} from "react-date-fns-hooks";

ReactDOM.render(
    <FormatRelative date={new Date()}/>,
    document.getElementById("app")
);
```

### Quick start - hooks

While the `<FormatRelative>` components cannot be used without react-dom, the
hooks `useFormatRelative`, `useFormatDistance`, `useFormatDistanceStrict` and
`useDateFunction` can also be used in React Native.

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {useFormatRelative} from "react-date-fns-hooks";

function Demo({date}: { date: Date }) {
    const time = useFormatRelative(date, {
        weekStartsOn: 6
    });
    return <time>{time}</time>
}

ReactDOM.render(
    <Demo date={new Date()}/>,
    document.getElementById("app")
);
```

### Locale support

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {useFormatRelative} from "react-date-fns-hooks";
import nb from "date-fns/locale/nb";

function Demo({date}: { date: Date }) {
    const time = useFormatRelative(date, {
        weekStartsOn: 6
    });
    return <time>{time}</time>
}

ReactDOM.render(
    <DateFnsProvider locale={nb}>
        <Demo date={new Date()}/>
    </DateFnsProvider>,
    document.getElementById("app")
);
```

### Use a context base date for testing

```tsx
import * as React from "react";
import {ReactElement} from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";

async function render(component: ReactElement) {
    const container = document.createElement("div");
    await act(async () => {
        ReactDOM.render(component, container);
    });
    return container;
}

it("formats relative time", async () => {
    const baseDate = new Date(2021, 1, 1, 0, 0, 0);
    const date = new Date(2021, 6, 1, 0, 0, 0);
    const container = await render(
        <DateFnsProvider baseDate={baseDate}>
            <Demo date={date}/>
        </DateFnsProvider>
    );
    expect(container.innerText).toEqual("6 months ago");
});
```


