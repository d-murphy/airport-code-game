
import Airplane from './airplane.svg';

const WelcomeScreen = function({setGameStage}){

    function startGame() {
        setGameStage('QuestionMode')
      }

    return(
        <div className="WelcomeScreen">
            <button className="StartButton" onClick={startGame}>Start the Quiz&nbsp;&nbsp;&nbsp;✈</button>
            <img className="Airplane" src={Airplane} alt="Airplane" height={90}></img>
        </div>
    )
}
export default WelcomeScreen