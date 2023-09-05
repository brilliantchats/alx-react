import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('getFullYear returns the correct date', () => {
    expect(getFullYear()).toEqual((new Date()).getFullYear());
});

test('getFooterCopy with true', () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
});
test('getFooterCopy with false', () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
});

test('getLatestNotification return string', () => {
    expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
});