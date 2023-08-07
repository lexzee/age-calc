import './App.css'
import submit from './assets/images/icon-arrow.svg'

function App() {
  const handleChange = ()=>{
    console.log('Hello world');
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
              defaultValue={"24"}
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
              defaultValue={"09"}
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
              defaultValue={"1984"}
              onChange={handleChange}
              />
            <small className='error'>date error</small>
          </label>
        </div>
        <div className="seperator">
          <hr />
          <img src={submit} alt="" className="submit"/>
        </div>
        <div className="output">
          <p><span className="years">{`38`}</span> years</p>
          <p><span className="months">{`3`}</span> months</p>
          <p><span className="days">{`26`}</span> days</p>
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
