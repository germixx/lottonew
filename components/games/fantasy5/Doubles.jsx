'use client';

import { useEffect, useState } from 'react';

import LFUNCTIONS from '../../functions/florida/fantasy5';

function Doubles(props) {

    let doubless, doubless2;
    const [doubleState, setDoubleState] = useState([]);
    const [winningNumbersArr, setWinningNumbersArr] = useState([]);

    useEffect( () => {
      (async() => {
        let f = await LFUNCTIONS.getDoubles(props.results);

        if (f === 'undefined' || f === undefined) {

        } else {
            if (f.status) {
                setDoubleState(props => {
                    return f.doubles;
                })
            }
        }
        setWinningNumbersArr(LFUNCTIONS.getDoublesFromSingleArr(props.winningNumbersArr));
      })()
    }, [props])

    if (doubleState.length > 0) {

        let dbl = [...doubleState];

        let firstCol = dbl.slice(0, dbl.length / 2);

        let secondCol = dbl.slice(dbl.length / 2, dbl.length);

        doubless = firstCol.map(e => (

            <div key={e[0]}>
                <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
            </div>

        ))

        doubless2 = secondCol.map(e => (

            <div key={e[0]}>
                <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
            </div>

        ))
    }

    return (
        <div>
            <h4 className='text-center underline'>Doubles</h4>
            <div className='flex text-center'>
                <div className='flex-1'>
                    {doubless}
                </div>  
                <div className='flex-1'>
                    {doubless2}
                </div>
            </div>
        </div>
    )

}

export default Doubles;