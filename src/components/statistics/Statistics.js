import React from "react";

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Total: {countTotalFeedback}</h3>
      <h3>Positive feedback: {countPositiveFeedbackPercentage}%</h3>
    </div>
  );
}
