import React from "react";
import styles from './AnswerItem.module.css';

const AnswerItem = props => {
  return (
    <li
      className={styles.AnswerItem}
      onClick={() => props.onAnswerClick(props.answerId)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem
