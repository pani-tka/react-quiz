import * as actions from "./quiz";
import * as actionTypes from "./ActionTypes";

describe("actions", () => {
  it("should creates FETCH_QUIZ_SUCCESS after successfuly fetching quiz by id", () => {
    const quiz = {};
    const expectedAction = {
      type: actionTypes.FETCH_QUIZ_SUCCESS,
      quiz,
    };
    expect(actions.fetchQuizSuccess(quiz)).toEqual(expectedAction);
  });

  it("should creates FETCH_QUIZES_START before fetching quizes", () => {
    const expectedAction = {
      type: actionTypes.FETCH_QUIZES_START,
    };
    expect(actions.fetchQuizesStart()).toEqual(expectedAction);
  });

  it("should creates FETCH_QUIZES_SUCCESS after successfuly fetching quizes", () => {
    const quizes = [];
    const expectedAction = {
      type: actionTypes.FETCH_QUIZES_SUCCESS,
      quizes,
    };
    expect(actions.fetchQuizesSuccess(quizes)).toEqual(expectedAction);
  });

  it("should creates FETCH_QUIZES_ERROR after fetching quizes failed", () => {
    const error = "";
    const expectedAction = {
      type: actionTypes.FETCH_QUIZES_ERROR,
      error,
    };
    expect(actions.fetchQuizesError(error)).toEqual(expectedAction);
  });

  it("should creates QUIZ_SET_STATE after answer click", () => {
    const answerState = {};
    const results = {};
    const expectedAction = {
      type: actionTypes.QUIZ_SET_STATE,
      answerState,
      results,
    };
    expect(actions.quizSetState(answerState, results)).toEqual(expectedAction);
  });

  it("should creates FINISH_QUIZ after finishing quiz", () => {
    const expectedAction = {
      type: actionTypes.FINISH_QUIZ,
    };
    expect(actions.finishQuiz()).toEqual(expectedAction);
  });

  it("should creates QUIZ_NEXT_QUESTION after answer click and if quiz is not finished yet", () => {
    const number = 1;
    const expectedAction = {
      type: actionTypes.QUIZ_NEXT_QUESTION,
      number,
    };
    expect(actions.quizNextQuestion(number)).toEqual(expectedAction);
  });

  it("should creates QUIZ_RETRY after retry button click", () => {
    const expectedAction = {
      type: actionTypes.QUIZ_RETRY,
    };
    expect(actions.retryQuiz()).toEqual(expectedAction);
  });
});
