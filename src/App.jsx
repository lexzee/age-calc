import './App.css'
import submit from './assets/images/icon-arrow.svg'

function App() {

  return (
    <>
      <div className="App">
        <div className="inputs">
          <label htmlFor="day" className="day">
            DAY
            <input
              type="text"
              className="input"
              id="day"
              value={"DD"}
            />
          </label>
          <label htmlFor="month" className="input">
            MONTH
            <input
              type="text"
              className="input"
              id="month"
              value={"MM"}
            />
          </label>
          <label htmlFor="year" className="input">
            DAY
            <input
              type="text"
              className="input"
              id="year"
              value={"YYYY"}
            />
          </label>
        </div>
        <div className="seperator">
          <hr />
          <img src={submit} alt="" className="submit" style={{backgroundColor: 'blue', borderRadius: '50%', padding: '1rem', width: '5%'}}/>
        </div>
        <div className="output">
          <p><span className="years">{`- -`}</span> years</p>
          <p><span className="months">{`- -`}</span> months</p>
          <p><span className="days">{`- -`}</span> days</p>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/lexzee" target='_blank'>Lexzee</a>.
      </div>
    </>
  )
}

export default App
