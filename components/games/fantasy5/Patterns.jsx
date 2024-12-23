import { useEffect, useState } from 'react'

import LFUNCTIONS from '../../functions/florida/fantasy5';

function Patterns(props) {

    let patterns
    const [recentPatterns, setRecentPatterns] = useState([])
    const [winningNumbersArr, setWinningNumbersArr] = useState([])

    useEffect( () => {
        (async() => {
        let g = await LFUNCTIONS.getPatterns(props.results)

        if (g === 'undefined' || g === undefined) {

        } else {
            if (g.status) {
                setRecentPatterns(props => {
                    return g.patterns;
                })
            }
        }
        setWinningNumbersArr(LFUNCTIONS.convertIntoPatternFromArray(props.winningNumbersArr));
      })()
    }, [props])

    if (recentPatterns.length > 0) {

        patterns = recentPatterns.map(e => (

            <div className='flex text-center' key={e[0]}>
                <div className='flex-1'>
                    <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
                </div>
                <div className='flex-1'>
                    <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
                </div>
                
            </div>

        ))
    }

    return (
        <div>
            <h4 className='text-center'>Patterns</h4>
            <div>{patterns}</div>
        </div>
    )
}

export default Patterns