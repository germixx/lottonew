import { useEffect, useState } from 'react'

import LFUNCTIONS from '../../functions/florida/fantasy5';

function Patterns(props) {

    let patterns, patterns2
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

        let patt = [...recentPatterns];
        
        let firstCol = patt.slice(0, patt.length / 2);
        let secondCol = patt.slice(patt.length / 2, patt.length);

        patterns = firstCol.map(e => (
            <div className='flex text-center' key={e[0]}>
                <div className='flex-1'>
                    <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
                </div>                
            </div>
        ))

        patterns2 = secondCol.map(e => (
            <div className='flex text-center' key={e[0]}>
                <div className='flex-1'>
                    <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
                </div>                
            </div>
        ))

    }

    return (
        <div>
            <h4 className='text-center'>Patterns</h4>
            <div className='flex text-center'>
                <div className='flex-1'>
                    {patterns}
                </div>
                <div className='flex-1'>
                    {patterns2}
                </div>
            </div>
        </div>
    )
}

export default Patterns