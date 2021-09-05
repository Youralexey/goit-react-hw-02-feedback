import css from "./FeedbackOptions.module.css";

export default function FeedbackOptiops({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button
          className={css.feedbackBtn}
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
