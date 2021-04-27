import {useState} from 'react';
import LetterInput from './LetterInput.js'
import NumberCorrect from './NumberCorrect.js'
import AirportName from './AirportName.js'

const AskQuestions = function({numCorrect, setNumCorrect, questAndAns, setQuestAndAns, setGameStage}){
    const [questionNum, setQuestionNum] = useState(0);
    const [activeLetter, setActiveLetter] = useState(0);
    const [Letter1, setLetter1] = useState('');
    const [Letter2, setLetter2] = useState('');
    const [Letter3, setLetter3] = useState('');

    const saveAndClearLetters = function() {
        var qAndAToUpdate = questAndAns
        qAndAToUpdate[questionNum].answer = Letter1 + Letter2 + Letter3;
        setQuestAndAns([...qAndAToUpdate])
        setQuestionNum(questionNum + 1)
        if(qAndAToUpdate[questionNum].answer.toUpperCase()===qAndAToUpdate[questionNum].Code){
            setNumCorrect(numCorrect+1)
        }
        if(questionNum===9){
            setGameStage("Results")
        }
        setLetter1("")
        setLetter2("")
        setLetter3("")
        setActiveLetter(0)
    }

    return (
        <div className="QuestionPage">
            <div>
                <AirportName questionNum={questionNum} questAndAns={questAndAns}/>
            </div>
            <div className="LetterInputs">
                <LetterInput id={0} LetterVal={Letter1} setLetterVal={setLetter1} 
                            activeLetter={activeLetter} setActiveLetter={setActiveLetter}
                            saveAndClearLetters={saveAndClearLetters}/>
                <LetterInput id={1} LetterVal={Letter2} setLetterVal={setLetter2} 
                            activeLetter={activeLetter} setActiveLetter={setActiveLetter}
                            saveAndClearLetters={saveAndClearLetters}/>
                <LetterInput id={2} LetterVal={Letter3} setLetterVal={setLetter3}  
                            activeLetter={activeLetter} setActiveLetter={setActiveLetter}
                            saveAndClearLetters={saveAndClearLetters}/>
            </div>
            <div className="numCorrect">
                <NumberCorrect numCorrect={numCorrect} questionNum={questionNum}/>
            </div>

        </div>
    )
}

export default AskQuestions