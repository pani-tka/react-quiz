import * as actions from "./create";
import * as actionTypes from "./ActionTypes";

describe("actions", () => {
  it("should create an action to create a quiz question", () => {
    const item = {};
    const expectedAction = {
      type: actionTypes.CREATE_QUIZ_QUESTION,
      item,
    };
    expect(actions.createQuizQuestion(item)).toEqual(expectedAction);
  });

  it("should create an action to reset a quiz creating", () => {
    const expectedAction = {
      type: actionTypes.RESET_QUIZ_CREATION,
    };
    expect(actions.resetQuizCreation()).toEqual(expectedAction);
  });
});
