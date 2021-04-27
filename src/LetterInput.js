import { useEffect, useRef } from "react"

const LetterInput = function({id, LetterVal, setLetterVal, 
                              activeLetter, setActiveLetter, saveAndClearLetters}) {

    function saveAnswer (eventTargetVal){
            setLetterVal(eventTargetVal)
            setActiveLetter(activeLetter+1)
    }

    const inputRef = useRef()

    useEffect(()=>{
        if(activeLetter===id){
            inputRef.current.focus()
            setLetterVal("")
        }

        if(activeLetter===3 && id===2){
            saveAndClearLetters()
        }
    })

    function handleClick() {
        setLetterVal("")
        setActiveLetter(id)
    }

    function handleTabs(e) {
        if(e.keyCode===9 && e.shiftKey){
            setActiveLetter(0)
            setLetterVal("")
        } else if(e.keyCode===9){
            saveAnswer("")
        }
    }


        if(activeLetter===id){
            return(<input type="text" value={LetterVal} onKeyDown={handleTabs} onChange={e => saveAnswer(e.target.value)} ref={inputRef} />)
        } else {
            return(<input type="text" value={LetterVal} onKeyDown={handleTabs} onChange={e => saveAnswer(e.target.value)} onClick={handleClick} />)
        } 
    }


export default LetterInput