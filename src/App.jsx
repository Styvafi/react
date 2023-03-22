import React, { useEffect, useState } from 'react';
import { render } from 'react-dom'



async function fetchWeatherData(){
  const data = await fetch("https://api.weather.gov/gridpoints/MTR/86,95/forecast")
  return (data.json())
}

export default function ParentComponent() {
  return (
    <div>
      <CoinFlipper/>
      <NumberGenerator/>
      <App/>
      <Background/>
      <StringDisplay/>
    </div>
  )
}
function StringDisplay() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      setDisplayText(inputText);
      setInputText("");
    }
  };

  return (
    
    <div>
            <h1>Write yourself a quote</h1>

      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
      />
      <h3>{displayText}</h3>
    </div>
  );
}
const Y = 'yellow'
const B = 'blue'

function Background() {
  const [color, setColor] = useState(B)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
    setColor(clicked ? B : Y)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div className="App">
      <button onClick={handleClick}>Change Background Color</button>
    </div>
  )
}
class App extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {
      temp: undefined,
    }
  }
  updateWeatherData(){
    fetchWeatherData().then(data=>{
      console.log(data)
      const todayForecast = data.properties.periods[0]
      this.setState({
        temp: todayForecast.temperature,
        forecast: todayForecast.shortForecast
      })
      console.log(this.state.temp)
    })
  }  

  componentDidMount() {
    setInterval(
      this.updateWeatherData(),
      3600000
    )
  }
  render () {
    return(
      <div>
    <h2>The temperature is {this.state.temp} degrees in </h2>
        <p> {this.state.forecast} </p>
        </div>
    );
   };
}

 function CoinFlipper() {
  const [result, setResult] = useState(null);

  function flipCoin() {
    const randomNum = Math.random();
    const coinResult = randomNum < 0.5 ? 'heads' : 'tails';
    setResult(coinResult);
  }

  return (
    <div>
      <h1>Coin Flipper</h1>
      <button onClick={flipCoin}>Flip coin</button>
      {result && <p>The result is {result}</p>}
    </div>
  );
}


 function NumberGenerator() {
  const[N_result, N_setResult] = useState(null);

function ChooseNumber() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  N_setResult(randomNum)
}
return (
  <div>
    <h1>1-10 Generator</h1>
    <button onClick={ChooseNumber}>Choose Number</button>
    {N_result && <p>The number is {N_result}</p>}
  </div>
)
}


