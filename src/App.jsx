import { useState, useEffect } from 'react'
import './App.css'
import submit from './assets/images/icon-arrow.svg'
import dayjs from 'dayjs'
import CountUp from 'react-countup'

function App() {
  const [isValid, setIsValid] = useState({
    date: true,
    day: true,
    month: true,
    year: true
  })
  const [input, setInput] = useState({
    day: '',
    month: '',
    year: ''
  })

  const [output, setOutput] = useState({
    day: "0",
    month: "0",
    year: "0",
  })

  // handle change
  const handleChange = (e)=>{
    setInput(state => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      }
    })

    setIsValid(state => {
      return {...state, [e.target.name]: true}
    })
  }

  const validateDay = ()=>{
    (input.day < 1 || input.day > 31) ?
      setIsValid(state => {
        return {...state, day: false}
      }) :
      setIsValid(state => {
        return {...state, day: true}
      })
  }

  const validateMonth = ()=>{
    (input.month < 1 || input.month > 12) ?
      setIsValid(state => {
        return {...state, month: false}
      }) :
      setIsValid(state => {
        return {...state, month: true}
      })
  }

  const validateYear = ()=>{
    let today = new Date();
    const currentYear = today.getFullYear();
    const enteredDate = new Date(`${input.year}-${input.month}-${input.day}`);
    const isDate = new Date(enteredDate);
    console.log(isDate);

    (input.year < 1 || input.year > currentYear) ?
      setIsValid(state => {
        return {...state, year: false}
      }) :
      setIsValid(state => {
        return {...state, year: true}
      })
  }

  //calculate Age
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


  //Set handler function for submit
  const handleClick = ()=>{
    const enteredDate = new Date(`${input.year}-${input.month}-${input.day}`);
    const currentDate = new Date();


    const isDate = new Date(enteredDate);
    console.log(isDate)

    // Validate form
    if (isDate !== "Invalid Date") {
      setIsValid(state => {
        return {
          ...state,
          date: false,
        }
      })
    } else {
      setIsValid(state => {
        return{
          ...state,
          date: true
        }
      })
    }

    const checkInputs = ()=>{
      let isCorrect = !isValid.date && isValid.day && isValid.month && isValid.year;
      let check = false;
      if (isCorrect) {
        check = true;
      }
      return check;
    }
    if (isDate !== "Invalid Date" && checkInputs) {
    // if (isDate !== "Invalid Date") {
      console.log(`${isDate == "Invalid Date" ? "Enter valid date" : isDate} `)
      const oldDate=dayjs(enteredDate.toDateString());
      const newDate=dayjs(currentDate.toDateString());

      const date = (`${input.year}-${input.month}-${input.day}`);

      console.log(`Date entered is ${enteredDate.toDateString()}`);
      console.log(`Current date: ${currentDate}`);
      // console.log(getAgeDetails(oldDate, newDate));

      setOutput({
        day: getAgeDetails(oldDate, newDate).days,
        month: getAgeDetails(oldDate, newDate).months,
        year: getAgeDetails(oldDate, newDate).years
      })

      setInput({
        day: '',
        month: '',
        year: ''
      })

      setIsValid(state => {
        return {...state, date:!state.date, day: true}
      })
    }

  }

  return (
    <>
    <div className="body">
      <div className="App">
        <div className={`inputs ${!isValid.date && 'fError'}`}>
          <label htmlFor="day" className={`day ${!isValid.day && 'fError'}`}>
            DAY
            <input
              type="text"
              className={`input ${!isValid.day && 'fError'}`}
              id="day"
              name='day'
              value={input.day}
              placeholder='DD'
              onChange={handleChange}
              onBlur={validateDay}
              />
            <small className={`error ${!isValid.day && 'show'}`}>Must be a valid day</small>
          </label>
          <label htmlFor="month" className={`month ${!isValid.month && 'fError'}`}>
            MONTH
            <input
              type="text"
              className={`input ${!isValid.month && 'fError'}`}
              id="month"
              name='month'
              value={input.month}
              placeholder='MM'
              onChange={handleChange}
              onBlur={validateMonth}
            />
            <small className={`error ${!isValid.month && 'show'}`}>Must be a valid month</small>
          </label>
          <label htmlFor="year" className={`year ${!isValid.year && 'fError'}`}>
            YEAR
            <input
              type="text"
              className={`input ${!isValid.year && 'fError'}`}
              id="year"
              name='year'
              value={input.year}
              placeholder='YYYY'
              onChange={handleChange}
              onBlur={validateYear}
              />
            <small className={`error ${!isValid.year && 'show'}`}>Must be a in the past</small>
          </label>
        </div>
        <small className={`error ${(!isValid.date && isValid)&& 'show'} dError`}>Must be a valid date</small>
        <div className="seperator">
          <hr />
          <img src={submit} alt="" className="submit" onClick={handleClick} />
        </div>
        <div className="output">
          <p><span className="years">{output.year == 0 ? '--' : <CountUp end={output.year} duration={3}/>}</span> year{output.year > 1 && 's'}</p>
          <p><span className="months">{output.month == 0 ? '--' : <CountUp end={output.month} duration={2}/>}</span> month{output.month > 1 && 's'}</p>
          <p><span className="days">{output.day == 0 ? '--' : <CountUp end={output.day} duration={1}/>}</span> day{output.day > 1 && 's'}</p>
          {/* <p><span className="years">{output.year}</span> years</p>
          <p><span className="months">{output.month}</span> months</p>
          <p><span className="days">{output.day}</span> days</p> */}
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
