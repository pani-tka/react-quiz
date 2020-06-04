import React from "react";
import styles from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => (
  <div className={styles.ActiveQuiz}>
    <div className={styles.Question}>
      <div>
        <strong>{props.answerNumber}.</strong>&nbsp;
        {props.question}
      </div>
      <div>
        {props.answerNumber} from {props.quizLength}
      </div>
    </div>
    <AnswersList
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;
