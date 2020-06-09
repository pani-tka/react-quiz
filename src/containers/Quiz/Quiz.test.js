import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import _Quiz from "./Quiz";
import Loader from "../../components/UI/Loader/Loader";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

configure({
  adapter: new Adapter(),
});

describe("Quiz", () => {
  const Quiz = _Quiz.WrappedComponent;

  const props = {
    quizes: [],
    loading: false,
    error: null,
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: null,
    match: { params: { id: 1 } },
    fetchQuizById: () => {},
    retryQuiz: () => {},
  };

  describe("Quiz is loading", () => {
    let QuizWrapper;
    it("should render Loader when data is fetching", () => {
      const nextProps = {
        ...props,
        loading: true,
      };

      QuizWrapper = shallow(<Quiz {...nextProps} />);
      expect(QuizWrapper.contains([<Loader />])).toEqual(true);
    });
  });

  // TODO: fix error
  /*describe("Quiz is finished", () => {
    let QuizWrapper;
    it("should render quiz results when data is fetching", () => {
      const nextProps = {
        ...props,
        isFinished: true,
      };

      QuizWrapper = shallow(<Quiz {...nextProps} />);
      expect(
        QuizWrapper.contains([
          <FinishedQuiz
            results={props.results}
            quiz={props.quiz}
            onRetry={props.retryQuiz}
          />,
        ])
      ).toEqual(true);
    });
  });

  describe("Quiz is active", () => {
    let QuizWrapper;
    it("should render active quiz", () => {
      const nextProps = {
        ...props,
      };

      QuizWrapper = shallow(<Quiz {...nextProps} />);
      expect(QuizWrapper.contains([<ActiveQuiz />])).toEqual(true);
    });
  });*/
});
