import {useState} from 'react'
import WelcomeScreen from './WelcomeScreen.js'
import select10Codes from './Select10Codes.js'
import AskQuestions from './AskQuestions.js'
import ResultsScreen from './ResultsScreen'
import './App.css'

const App = function () {
  const [gameStage, setGameStage] = useState('WelcomeScreen')
  const [numCorrect, setNumCorrect] = useState(0)
  const [questAndAns, setQuestAndAns] = useState([...select10Codes])

  function gameControl(gameStage){
    if (gameStage === "WelcomeScreen") {
      return(<WelcomeScreen setGameStage={setGameStage}/>)
    } else if (gameStage ==="QuestionMode"){
      return (<AskQuestions numCorrect={numCorrect} setNumCorrect={setNumCorrect} 
                            questAndAns={questAndAns} setQuestAndAns={setQuestAndAns}
                            setGameStage={setGameStage}/>)
    } else {
      return(<ResultsScreen numCorrect={numCorrect} questionNum={10} questAndAns={questAndAns}/>
        )
    }
  }

  return(
    <div className="App">
      <h2 className="Title">Airport Code Quiz</h2>
      <div className="gameControl">{gameControl(gameStage)}</div>
    </div>

  )
}

export default App