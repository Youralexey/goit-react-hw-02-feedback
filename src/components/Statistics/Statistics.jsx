import css from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>
        <span className={css.statistic}>Good:</span> {good}
      </li>
      <li>
        <span className={css.statistic}>Neutral:</span> {neutral}
      </li>
      <li>
        <span className={css.statistic}>Bad:</span> {bad}
      </li>
      <li>
        <span className={css.statistic}>Total:</span> {total}
      </li>
      <li>
        <span className={css.statistic}>Positive Feedback:</span> {positivePercentage}%
     </li>   
    </ul>
  );
}
