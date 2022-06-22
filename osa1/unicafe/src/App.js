import { useState } from 'react'

const Button = ({clickHandle, name}) => (
  <button onClick={clickHandle}>
    {name}
  </button>
)

const StatisticLine = (props) => {

  if (props.isPercentage === true) {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </tr>
    )
  }
    else {
      return (
        <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
      )
    }

}

const Statistics = (props) => {

  var feedbackCount = props.good + props.neutral + props.bad

  if (feedbackCount === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  // Statistics calculated based on feedback.
  const feedbackAverage = (props.good - props.bad) / feedbackCount
  const positiveFeedback = (props.good / feedbackCount) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={props.good} isPercentage={false}/>
        <StatisticLine text='Neutral' value={props.neutral} isPercentage={false}/>
        <StatisticLine text='Bad' value={props.bad} isPercentage={false}/>
        <StatisticLine text='All' value={feedbackCount} isPercentage={false}/>
        <StatisticLine text='Average' value={feedbackAverage} isPercentage={false}/>
        <StatisticLine text='Good' value={positiveFeedback} isPercentage={true}/>
      </tbody>
    </table>
  )

}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h2>Give Feedback</h2>
        <Button clickHandle={() => setGood(good + 1)} name='Good'/>
        <Button clickHandle={() => setNeutral(neutral + 1)} name='Neutral'/>
        <Button clickHandle={() => setBad(bad + 1)} name='Bad'/>
      </div>
      <div>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App
