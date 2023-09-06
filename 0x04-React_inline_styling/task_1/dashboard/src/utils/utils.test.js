import {getFullYear, getLatestNotification, getFooterCopy } from "./utils";

describe("Tests for utils functions", () => {
    it("test getFullYear", () => {
        const date = new Date();
        expect(getFullYear()).toEqual(date.getFullYear());
    });
    it("test getLatestNotification", () => {
        expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
    it("test getFooterCopy", () => {
        expect(getFooterCopy(true)).toEqual("Holberton School");
        expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
});