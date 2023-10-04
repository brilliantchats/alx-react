import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("tests for actions for redux", () => {
    it("test selectCourse", () => {
        const returnValue = {type: SELECT_COURSE, index: 1};
        expect(selectCourse(1)).toEqual(returnValue);
    });
    it("test unSelectCourse", () => {
        const returnValue = {type: UNSELECT_COURSE, index: 1};
        expect(unSelectCourse(1)).toEqual(returnValue);
    });
});