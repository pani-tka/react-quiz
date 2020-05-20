import React from "react";
import styles from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={styles.ActiveQuiz}>
    <div className={styles.Question}>
      <div>
        <strong>2.</strong>&nbsp;
        {props.question}
      </div>
      <div>4 from 6</div>
    </div>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
)

export default ActiveQuiz;
