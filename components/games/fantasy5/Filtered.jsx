'use client';

import { useEffect, useState } from 'react';
import LFUNCTIONS from '../../functions/florida/fantasy5';

const Filtered = (props) => {

  let filtered, filtered2;
  const [recentlyPlayedNumbers, setRecentlyPlayedNumbers] = useState([]);
  const [winningNumbersArr, setWinningNumbersArr] = useState([]);

  useEffect(() => {

    (async () => {

      let f = await LFUNCTIONS.filterPlayedNumbers(props.results);

      if (f === 'undefined' || f === undefined) {

      } else {
        if (f.status) {
          setRecentlyPlayedNumbers(props => {
            return f.filtered;
          })
        }
      }
      setWinningNumbersArr(props.winningNumbersArr);
    })()


  }, [props]);

  if (recentlyPlayedNumbers.length > 0) {
  
    let fars = [...recentlyPlayedNumbers];

    let firstCol = fars.slice(0, fars.length / 2);

    let secondCol = fars.slice(fars.length / 2, fars.length);
    
    filtered = firstCol.map(e => (
      <div className='' key={e[0]}>
          <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
      </div>
    ))

    filtered2 = secondCol.map(e => (
      <div className='' key={e[0]}>
          <span className={`${winningNumbersArr.includes(e[0]) ? "text-accent" : ""}`}>{e[0]}</span> : <span>{e[1]}</span>
      </div>
    ))

  }

  return (
    <div>
      <h4 className='text-center underline'>Filtered</h4>
        <div className='flex text-center'>
          <div className='flex-1'>
          {filtered}
          </div>  
          <div className='flex-1'>
            {filtered2}
          </div>
        </div>
    </div>
  )
}

export default Filtered