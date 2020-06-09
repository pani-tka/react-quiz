import createReducer from "./create";
import * as actionTypes from "../actions/actionTypes";

describe("create reducer", () => {
  it("should return the initial state", () => {
    expect(createReducer(undefined, {})).toEqual({
      quiz: [],
    });
  });

  // TODO: fix test error
  /*it("should store the token upon login", () => {
    expect(
      createReducer(
        {
          quiz: [],
        },
        {
          type: actionTypes.CREATE_QUIZ_QUESTION,
          quiz: [
            {
              question: "2*2",
              id: 1,
              rightAnswerId: 1,
              answers: [
                { text: "4", id: 1 },
                { text: "5", id: 2 },
                { text: "6", id: 3 },
                { text: "7", id: 4 },
              ],
            },
          ],
        }
      )
    ).toEqual({
      quiz: [
        {
          question: "2*2",
          id: 1,
          rightAnswerId: 1,
          answers: [
            { text: "4", id: 1 },
            { text: "5", id: 2 },
            { text: "6", id: 3 },
            { text: "7", id: 4 },
          ],
        },
      ],
    });
  });*/

  it("should reset the quiz creation with initial value after logout", () => {
    expect(
      createReducer(
        {
          quiz: [],
        },
        {
          type: actionTypes.RESET_QUIZ_CREATION,
          quiz: [],
        }
      )
    ).toEqual({
      quiz: [],
    });
  });
});
