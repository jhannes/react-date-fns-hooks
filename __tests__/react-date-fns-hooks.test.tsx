import {DateFnsProvider, FormatDistance, FormatDistanceStrict, FormatRelative} from "../src";
import {add} from "date-fns";
import {act} from "react-dom/test-utils";
import * as React from "react";
import {ReactElement} from "react";
import ReactDOM from "react-dom";

async function render(component: ReactElement) {
    const container = document.createElement("div");
    await act(async () => {
        ReactDOM.render(component, container);
    });
    return container;
}

const baseDate = new Date(2021, 1, 1, 0, 0, 0);

describe("React date-fns", () =>  {
    it("formats distance", async () => {
        const container = await render(
            <DateFnsProvider baseDate={baseDate}>
                <FormatDistance date={add(baseDate, {months: 5})}/>
            </DateFnsProvider>
        );
        expect(container.querySelector("time")!.innerHTML).toEqual("5 months");
    })

    it("formats distance strict", async () => {
        const container = await render(
            <DateFnsProvider baseDate={baseDate}>
                <FormatDistanceStrict date={add(baseDate, {months: 5})} addSuffix={true}/>
            </DateFnsProvider>
        );
        expect(container.querySelector("time")!.innerHTML).toEqual("in 5 months");
    });

    it("formats distance strict", async () => {
        const container = await render(
            <DateFnsProvider baseDate={baseDate}>
                <FormatRelative date={add(baseDate, {days: 2})} weekStartsOn={1} />
            </DateFnsProvider>
        );
        expect(container.querySelector("time")!.innerHTML).toEqual("Wednesday at 12:00 AM");
    });

})
