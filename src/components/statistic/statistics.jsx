export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  feedbackPercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {feedbackPercentage}%</p>
    </div>
  );
};
