import React from "react";
import styles from "./FinishedQuiz.module.css";
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total;
  }, 0)

  return (
    <div className={styles.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            styles[props.results[quizItem.id]]
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>. &nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}/>
            </li>
          )
        })}
      </ul>
      <p> Right {successCount} from {props.quiz.length} </p>
      <div>
        <Button onClick={props.onRetry} type='primary'>Retry</Button>
        <Button type='success'>Go to the Test List</Button>
      </div>
    </div>
  )
}

export default FinishedQuiz
