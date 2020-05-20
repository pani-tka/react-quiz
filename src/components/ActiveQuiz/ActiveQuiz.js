import React from "react";
import styles from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={styles.ActiveQuiz}>
    <div className={styles.Question}>
      <div>
        <strong>2.</strong>&nbsp;
        How is going?
      </div>
      <div>4 from 6</div>
    </div>
    <AnswersList answers={props.answers}/>
  </div>
)

export default ActiveQuiz;
