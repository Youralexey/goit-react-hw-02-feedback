import React, { Component } from "react";
import Section from "./components/Section/Section.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import FeedbackOptiops from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Notification from "./components/Notification/Notification.jsx";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = (e) => {
    this.setState((prevState) => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const persentOfGood = ((good / total) * 100).toFixed(0);

    return total ? persentOfGood : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptiops
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
