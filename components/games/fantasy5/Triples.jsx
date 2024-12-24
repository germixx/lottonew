'use client';

import { useEffect, useState } from 'react'

import LFUNCTIONS from '../../functions/florida/fantasy5';

function Triples(props) {

    let tripless, tripless2;
    const [tripleState, setTripleState] = useState([]);
    const [winningNumbersArr, setWinningNumbersArr] = useState([]);

    useEffect( () => {
      (async() => {
        let f = await LFUNCTIONS.getTriples(props.results);

        if (f === 'undefined' || f === undefined) {

        } else {
            if (f.status) {
                setTripleState(props => {
                    return f.triples;
                })
            }
        }
        setWinningNumbersArr(LFUNCTIONS.getTriplesFromSingleArr(props.winningNumbersArr));
      })()
    }, [props])

    if (tripleState.length > 0) {

        let trpl = [...tripleState];
        
        let firstCol = trpl.slice(0, trpl.length / 2);

        let secondCol = trpl.slice(trpl.length / 2, trpl.length);

        tripless = firstCol.map(e => (
            <div key={e[0]}>
                <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
            </div>
        ))

        tripless2 = secondCol.map(e => (
            <div key={e[0]}>
                <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
            </div>
        ))
    }

    return (
        <div>
            <h4 className='text-center'>Triples</h4>
            <div className='flex text-center'>
                <div className='flex-1'>
                    {tripless}
                </div>  
                <div className='flex-1'>
                    {tripless2}
                </div>
            </div>
        </div>
    )

}

export default Triples