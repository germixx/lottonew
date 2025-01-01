import { useEffect, useState } from 'react';

import LFUNCTIONS from '../../functions/florida/fantasy5';

function SubPatterns(props) {

    let subpatterns, subpatterns2;
    const [recentSubpatterns, setRecentSubpatterns] = useState([]);
    const [winningNumbersArr, setWinningNumbersArr] = useState([]);

    useEffect( () => {
      (async() => {
        let g = await LFUNCTIONS.getSubPatterns(props.results);

        if (g === 'undefined' || g === undefined) {

        } else {
            if (g.status) {
                setRecentSubpatterns(props => {
                    return g.subpatterns;
                })
            }
        }
        setWinningNumbersArr(LFUNCTIONS.convertIntoPatternSubPatternFromArray(props.winningNumbersArr));
      })()
    }, [props])

    if (recentSubpatterns.length > 0) {

        let subp = [...recentSubpatterns];

        let firstCol = subp.slice(0, subp.length / 2);

        let secondCol = subp.slice(subp.length / 2, subp.length);

        subpatterns = firstCol.map(e => (
            <div key={e[0]}>
                <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
            </div>
        ))

        subpatterns2 = secondCol.map(e => (
            <div key={e[0]}>
                <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
            </div>
        ))
    }

    return (
        <div>
            <h4 className='text-center underline'>SubPatterns</h4>
            <div className='flex text-center'>
                <div className='flex-1'>
                    {subpatterns}
                </div>  
                <div className='flex-1'>
                    {subpatterns2}
                </div>
            </div>
        </div>
    )
}

export default SubPatterns