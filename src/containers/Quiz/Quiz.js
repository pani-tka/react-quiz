import React, {Component} from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 2,
        answers: [
          {text: 'Black', id: 1},
          {text: 'Blue', id: 2},
          {text: 'Green', id: 3},
          {text: 'White', id: 4},
        ]
      }
    ],
  }

  onAnswerClickHandler = answerId => {

  }

  render() {
    return(
      <div className={styles.Quiz}>
        <h1> Answer all questions </h1>
        <div className={styles.QuizWrapper}>
          <ActiveQuiz
            question={this.state.quiz[0].question}
            answers={this.state.quiz[0].answers}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )

  }
}

export default Quiz;
