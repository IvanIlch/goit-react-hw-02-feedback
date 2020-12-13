import React from "react";
import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <button
      className={styles.btn}
      type="button"
      name={options}
      onClick={onLeaveFeedback}
    >
      {options}
    </button>
  );
}
