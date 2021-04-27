const NumberCorrect = function ({numCorrect, questionNum}) {
    return(
        <div className="NumberCorrect">
            {numCorrect} correct out of {questionNum}
        </div>

    )    
}

export default NumberCorrect