const AnswerTable = function ({questAndAns}){
    if(questAndAns){
        return(
            <div className="AnswerTable">
                <table>
                    <thead>
                        <tr>
                            <th>Airport</th>
                            <th>Code</th>
                            <th>Your Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questAndAns.map((airport, i) =>
                                    <tr key={i}>
                                        <td>{airport.AirportName}</td>
                                        <td>{airport.Code}</td>
                                        <td>{airport.answer.toUpperCase()}</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    } else {
        return(<p></p>)
    }
}



export default AnswerTable