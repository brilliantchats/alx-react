import { courseReducer } from "./courseReducer";
import { SELECT_COURSE,
         FETCH_COURSE_SUCCESS,
         UNSELECT_COURSE } from "../actions/courseActionTypes";

describe("tests for courseReducer", () => {
    it("tests default state", () => {
        expect(courseReducer(undefined, {type: 'invalid'})).toEqual([]);
    });
    it("tests for fetch courses action", () => {
        const expected = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
              },
              {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
              },
              {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
              }
        ];
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
              {
                id: 1,
                name: "ES6",
                credit: 60
              },
              {
                id: 2,
                name: "Webpack",
                credit: 20
              },
              {
                id: 3,
                name: "React",
                credit: 40
              }
            ]
        };
        expect(courseReducer(undefined, action)).toEqual(expected);
    });
});