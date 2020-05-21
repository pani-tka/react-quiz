import React, {Component} from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Black', id: 1},
          {text: 'Blue', id: 2},
          {text: 'Green', id: 3},
          {text: 'White', id: 4},
        ]
      },
      {
        question: 'What year was founded SP?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: '1700', id: 1},
          {text: '1705', id: 2},
          {text: '1703', id: 3},
          {text: '1803', id: 4},
        ]
      }
    ],
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState[0])
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {

      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return(
      <div className={styles.Quiz}>
        <div className={styles.QuizWrapper}>
          <h1> Answer all questions </h1>
          {
            this.state.isFinished
            ? <FinishedQuiz />
            : <ActiveQuiz
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}

export default Quiz;
