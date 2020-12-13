import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";

const initial_state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default class App extends Component {
  state = { ...initial_state };
  onLeaveFeedback = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  keysOfState = Object.keys(this.state);
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  }
  render() {
    return (
      <>
        <Section title="Please Leave feedback">
          {this.keysOfState.map((arr) => {
            return (
              <FeedbackOptions
                key={uuidv4()}
                options={arr}
                onLeaveFeedback={this.onLeaveFeedback}
              />
            );
          })}
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 && (
            <Notification messege="No feedback given" />
          )}
          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
