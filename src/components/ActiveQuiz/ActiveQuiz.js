import React from "react";
import styles from './ActiveQuiz.module.css';

const ActiveQuiz = props => (
  <div className={styles.ActiveQuiz}>
    <div className={styles.Question}>
      <div>
        <strong>2.</strong>&nbsp;
        How is going?
      </div>
      <div>4 from 6</div>
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
)

export default ActiveQuiz;
