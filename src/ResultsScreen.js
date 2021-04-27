import NumberCorrect from './NumberCorrect.js'
import AnswerTable from './AnswerTable.js'
import Airplane from './airplane.svg';

const ResultsScreen = function ({numCorrect, questionNum, questAndAns}) {
    return(
        <div className="ResultsScreen">
            <NumberCorrect numCorrect={numCorrect} questionNum={questionNum} />
            <AnswerTable questAndAns={questAndAns}/>
            <img className="Airplane" src={Airplane} alt="Airplane" height={90}></img>
        </div>

    )    
}

export default ResultsScreen