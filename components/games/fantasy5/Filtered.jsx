'use client';

import { useEffect, useState } from 'react';
import LFUNCTIONS from '../../functions/florida/fantasy5';

const Filtered = (props) => {
  
  let filtered;
  const [recentlyPlayedNumbers, setRecentlyPlayedNumbers] = useState([]);
  const [winningNumbersArr, setWinningNumbersArr] = useState([]);
  
  useEffect( () => {

    (async() => {
      
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
    
    console.log(recentlyPlayedNumbers.length, 'si len' )
    
    // let len = recentlyPlayedNumbers.length;
    // let numbers = recentlyPlayedNumbers;
    // let firstCol = numbers.slice(0, recentlyPlayedNumbers.length / 2);
    // let secondCol = firstCol.splice( numbers.length / 2, numbers.length);
    // console.log(firstCol, secondCol, ' is colums')

    filtered = recentlyPlayedNumbers.map(e => (

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
      <h4 className='text-center'>Filtered</h4>
      <div>{filtered}</div>
  </div>
  )
}

export default Filtered