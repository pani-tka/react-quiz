import quizReducer from "./quiz";
import * as actionTypes from "../actions/actionTypes";

describe("quiz reducer", () => {
  it("should return the initial state", () => {
    expect(quizReducer(undefined, {})).toEqual({
      quizes: [],
      loading: false,
      error: null,
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
      quiz: null,
    });
  });

  it("should store the token upon login", () => {
    expect(
      quizReducer(
        {
          loading: false,
        },
        {
          type: actionTypes.FETCH_QUIZES_START,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("should store the quizes if fetching was successful", () => {
    expect(
      quizReducer(
        {
          loading: false,
          quizes: [],
        },
        {
          type: actionTypes.FETCH_QUIZES_SUCCESS,
          loading: false,
          quizes: [
            {
              id: 1,
              name: `Test №1`,
            },
          ],
        }
      )
    ).toEqual({
      loading: false,
      quizes: [
        {
          id: 1,
          name: `Test №1`,
        },
      ],
    });
  });

  it("should show error message, if the fetching failed", () => {
    expect(
      quizReducer(
        {
          loading: false,
          error: null,
        },
        {
          type: actionTypes.FETCH_QUIZES_ERROR,
          loading: false,
          error: "New Error",
        }
      )
    ).toEqual({
      loading: false,
      error: "New Error",
    });
  });

  it("should show selected quiz from fetched quizes", () => {
    expect(
      quizReducer(
        {
          loading: false,
          quiz: null,
        },
        {
          type: actionTypes.FETCH_QUIZ_SUCCESS,
          loading: false,
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
      loading: false,
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
  });

  it("should change the status of quiz answers", () => {
    expect(
      quizReducer(
        {
          answerState: null,
          results: {},
        },
        {
          type: actionTypes.QUIZ_SET_STATE,
          answerState: { 1: "success" },
          results: { 1: "success" },
        }
      )
    ).toEqual({
      answerState: { 1: "success" },
      results: { 1: "success" },
    });
  });

  it("should be called when quiz is finished", () => {
    expect(
      quizReducer(
        {
          isFinished: false,
        },
        {
          type: actionTypes.FINISH_QUIZ,
          isFinished: true,
        }
      )
    ).toEqual({
      isFinished: true,
    });
  });

  // TODO: fix test error
  /*it("should change quiz state to go to the next question", () => {
    expect(
      quizReducer(
        {
          answerState: null,
          activeQuestion: 0,
        },
        {
          type: actionTypes.QUIZ_NEXT_QUESTION,
          answerState: null,
          activeQuestion: 1,
        }
      )
    ).toEqual({
      answerState: null,
      activeQuestion: 1,
    });
  });*/

  it("should reset quiz state", () => {
    expect(
      quizReducer(
        {
          activeQuestion: 0,
          answerState: null,
          isFinished: false,
          results: {},
        },
        {
          type: actionTypes.QUIZ_RETRY,
          activeQuestion: 0,
          answerState: null,
          isFinished: false,
          results: {},
        }
      )
    ).toEqual({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  });
});
