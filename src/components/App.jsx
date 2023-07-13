import { Section } from './section/section';
import { Feedbackoption } from './feedback/feedback';
import { Statistics } from './statistic/statistics';
import { Notification } from './Notification/Notification';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedbackoption
            options={Object.keys(this.state)}
            updateState={this.updateState}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              feedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
