import { useState } from 'react'
import dayJs from 'dayjs'
import './App.css'
import submit from './assets/images/icon-arrow.svg'
import dayjs from 'dayjs'
// import { intervalToduration } from 'date-fns'

function App() {
  const [input, setInput] = useState({
    day: "",
    month: "",
    year: ""
  })

  const [output, setOutput] = useState({
    day: "--",
    month: "--",
    year: "--",
  })

  const handleChange = (e)=>{
    setInput(state => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      }
    })
  }

  const getAgeDetails = (oldDate, newDate) => {
    const years = newDate.diff(oldDate, 'year');
    const months = newDate.diff(oldDate, 'months') - years * 12;
    const days = newDate.diff(oldDate.add(years, 'year').add(months, 'month'), 'day')

    return {
      years,
      months,
      days,
      allDays: newDate.diff(oldDate, 'day'),
    };
  };
  const handleClick = ()=>{
    const enteredDate = new Date(`${input.year}-${input.month}-${input.day}`);
    // const enteredDate = new Date(Date.UTC(input.year,input.month,input.day));
    const currentDate = new Date();

    const oldDate=dayjs(enteredDate.toISOString());
    const newDate=dayjs(currentDate.toISOString());

    const date = (`${input.year}-${input.month}-${input.day}`);

    console.log(`Date entered is ${enteredDate.toDateString()}`);
    console.log(`Current date: ${currentDate}`);
    // console.log(getAgeDetails(oldDate, newDate));

    setOutput({
      day: getAgeDetails(oldDate, newDate).days,
      month: getAgeDetails(oldDate, newDate).months,
      year: getAgeDetails(oldDate, newDate).years
    })

  }

  return (
    <>
    <div className="body">
      <div className="App">
        <div className="inputs">
          <label htmlFor="day" className="day">
            DAY
            <input
              type="text"
              className="input"
              id="day"
              name='day'
              // value={input.day}
              placeholder='DD'
              onChange={handleChange}
              />
            <small className='error'>date error</small>
          </label>
          <label htmlFor="month" className="month">
            MONTH
            <input
              type="text"
              className="input"
              id="month"
              name='month'
              // value={input.month}
              placeholder='MM'
              onChange={handleChange}
            />
            <small className='error'>date error</small>
          </label>
          <label htmlFor="year" className="year">
            YEAR
            <input
              type="text"
              className="input"
              id="year"
              name='year'
              // value={input.year}
              placeholder='YYYY'
              onChange={handleChange}
              />
            <small className='error'>date error</small>
          </label>
        </div>
        <div className="seperator">
          <hr />
          <img src={submit} alt="" className="submit" onClick={handleClick} />
        </div>
        <div className="output">
          <p><span className="years">{output.year}</span> years</p>
          <p><span className="months">{output.month}</span> months</p>
          <p><span className="days">{output.day}</span> days</p>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/lexzee" target='_blank'>Lexzee</a>.
      </div>
    </div>
    </>
  )
}

export default App
