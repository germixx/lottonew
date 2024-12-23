'use client';
import Loading from '../../../../components/Loading';
import Filtered from '../../../../components/games/fantasy5/Filtered';
import Doubles from '../../../../components/games/fantasy5/Doubles';
import Triples from '../../../../components/games/fantasy5/Triples';
import Patterns from '../../../../components/games/fantasy5/Patterns';
import Subpatterns from '../../../../components/games/fantasy5/Subpatterns';

import { useEffect, useState } from 'react';

const Fantasy5 = () => {
  let resultz = [];
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState('mid');
  const [sessionDate, setSessionDate] = useState('');
  const [currentHot, setCurrentHot] = useState([]);
  const [currentCold, setCurrentCold] = useState([]);
  const [currentOverdue, setCurrentOverdue] = useState([]);
  const [currentRepeat, setCurrentRepeat] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [lines, setLines] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState('');
  const [winningNumbersArr, setWinningNumbersArr] = useState([]);
  const [eveSessionData, setEveSessionData] = useState('');
  const [midSessionData, setMidSessionData] = useState('');
  const [recentResults, setRecentResults] = useState('');
  const [showPattern, setShowPattern] = useState(false);
  const [showFiltered, setShowFiltered] = useState(true);
  const [showSubPatterns, setShowSubPatterns] = useState(false);
  const [showDoubles, setShowDoubles] = useState(false);
  const [showTriples, setShowTriples] = useState(false);
    
  const getData = (date) => {
    fetch(`/api/us/florida/officialSessionData`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json; charset=UTF-8" 
      },
      body: JSON.stringify({
          date
      })
  }).then(res => res.json())
      .then((json) => {
           
          if (json.ress.status) {
            
            setSessionDate(json.ress.data.sessionDate);
            setCurrentHot(json.ress.data.games.fantasy5.midday.hot);
            setCurrentCold(json.ress.data.games.fantasy5.midday.cold);
            setCurrentOverdue(json.ress.data.games.fantasy5.midday.overdue);
            setCurrentRepeat(json.ress.data.games.fantasy5.midday.repeat);
            setWinningNumbers(json.ress.data.games.fantasy5.midday.winningNumbers);
            setWinningNumbersArr(json.ress.data.games.fantasy5.midday.winningNumbers.split('-'));
            setRecentResults(json.ress.data.games.fantasy5.midday.recentResults);
            setMidSessionData(json.ress.data.games.fantasy5.midday);
            setEveSessionData(json.ress.data.games.fantasy5.eve);
            setPredictions(json.ress.data.games.fantasy5.midday.predictions);
            setLines(json.ress.data.games.fantasy5.midday.predictions);
            setSession('mid');
            setIsLoading(false);
            return true;

          } else {
            let dt = new Date();

            dt.setDate(dt.getDate() - 1);
  
            let x = getData(dt.toLocaleDateString());
            
            setIsLoading(false);
            return false;
          }
  
      }).catch(err => {
          throw err
      })
  }

  useEffect( () => {

    (async()=>{

        let x = await getData(new Date().toLocaleDateString());

      })()

  }, [])

  const minus1day = async () => {

    let d = new Date(sessionDate);
    
    d.setDate(d.getDate() - 1);

    setSessionDate(d.toLocaleDateString());

    let xA = await getData(d.toLocaleDateString());

  }

  const plus1Day = async () => { 

    let d = new Date(sessionDate);
    
    d.setDate(d.getDate() + 1);

    setSessionDate(d.toLocaleDateString());

    let xA = await getData(d.toLocaleDateString());

  }

  const toggleFiPaSuDuTri = (val) => {

    switch (val) {
        case 'filter':
            setShowFiltered(true);
            setShowDoubles(false);
            setShowPattern(false);
            setShowSubPatterns(false);
            setShowTriples(false);
            break;
        case 'patterns':
            setShowFiltered(false);
            setShowDoubles(false);
            setShowPattern(true);
            setShowSubPatterns(false);
            setShowTriples(false);
            break;
        case 'subPatterns':
            setShowFiltered(false);
            setShowDoubles(false);
            setShowPattern(false);
            setShowSubPatterns(true);
            setShowTriples(false);
            break;
        case 'doubles':
            setShowFiltered(false);
            setShowDoubles(true);
            setShowPattern(false);
            setShowSubPatterns(false);
            setShowTriples(false);
            break;
        case 'triples':
            setShowFiltered(false);
            setShowDoubles(false);
            setShowPattern(false);
            setShowSubPatterns(false);
            setShowTriples(true);
            break;
    }

}

  const changeSession = (day) => {

    if(session === 'mid' && day === 'eve'){

      // set Eve
      setCurrentHot(eveSessionData.hot);
      setCurrentCold(eveSessionData.cold);
      setCurrentOverdue(eveSessionData.overdue);
      setCurrentRepeat(eveSessionData.repeat);
      setWinningNumbers(eveSessionData.winningNumbers);
      setWinningNumbersArr(eveSessionData.winningNumbers.split('-'));
      setRecentResults(eveSessionData.recentResults);
      setPredictions(eveSessionData.predictions);
      setLines(eveSessionData.predictions);
      setSession('eve');
    }

    if(session === 'eve' && day === 'mid'){

      // set Mid
      setCurrentHot(midSessionData.hot);
      setCurrentCold(midSessionData.cold);
      setCurrentOverdue(midSessionData.overdue);
      setCurrentRepeat(midSessionData.repeat);
      setWinningNumbers(midSessionData.winningNumbers);
      setWinningNumbersArr(midSessionData.winningNumbers.split('-'));
      setRecentResults(midSessionData.recentResults);
      setPredictions(midSessionData.predictions);
      setLines(midSessionData.predictions);
      setSession('mid');
    }

  }

      // Map recent result
  if(recentResults.length != 0){
    
    resultz = recentResults.map(e => {

      let tmp = e.sequence.split('-');

      return <div className="text-center" key={e.date}>
          {/* {e.sequence} */}
          <span className={`${winningNumbersArr.includes(e.n1.toString()) ? "text-accent" : ""}`}>{e.n1}</span>-<span className={`${winningNumbersArr.includes(e.n2.toString()) ? "text-accent" : ""}`}>{e.n2}</span>-<span className={`${winningNumbersArr.includes(e.n3.toString()) ? "text-accent" : ""}`}>{e.n3}</span>-<span className={`${winningNumbersArr.includes(e.n4) ? "text-accent" : ""}`}>{e.n4.toString()}</span>-<span className={`${winningNumbersArr.includes(e.n5.toString()) ? "text-accent" : ""}`}>{e.n5}</span> 
          {/* <span>[{LFUNCTIONS.intoDelta(e.n1, e.n2, e.n3, e.n4, e.n5)}]</span> */}
      </div>
    })
  }

  const mapLines = lines.map((e) => {

    let temp = e.sequence.split('-');

    return <div key={e.sequence}>
        <span className={`${winningNumbersArr.includes(temp[0]) ? "text-accent" : ""}`}>{temp[0]}</span>-<span className={`${winningNumbersArr.includes(temp[1]) ? "text-accent" : ""}`}>{temp[1]}</span>-<span className={`${winningNumbersArr.includes(temp[2]) ? "text-accent" : ""}`}>{temp[2]}</span>-<span className={`${winningNumbersArr.includes(temp[3]) ? "text-accent" : ""}`}>{temp[3]}</span>-<span className={`${winningNumbersArr.includes(temp[4]) ? "text-accent" : ""}`}>{temp[4]}</span> <span style={{ color: 'green' }}>{e.played ? '✔' : ''}</span> <span style={{ color: 'orange', fontSize: '12px', fontWeight: 'bold' }}>{e.quickPick === true || e.quickPick === 'true' ? 'QP' : ''}</span>
    </div>
})

  return (
    <>
      {isLoading ? (
        <div className="antialiased flex flex-row min-h-screen justify-center items-center">
              <main className=" md:ml-64 h-auto pt-20">
                <Loading />
              </main>
        </div>
      ) 
      : (
        <div>
            <div className="antialiased">
              <main className="p-4 md:ml-64 h-auto pt-20">
                <div className='text-center text-2xl font-bold underline decoration-double'>Fantasy5</div>
                <div className='flex flow-root'>
                    <div className='float-left ml-6'>
                      <button  onClick={() => changeSession('mid')} className={`${session === 'mid' ? 'text-accent mr-4 font-medium hover:text-accent' : 'mr-4 font-medium hover:text-accent'}`}>Mid</button>
                      <button  onClick={() => changeSession('eve')}  className={`${session === 'eve' ? 'text-accent mr-4 font-medium hover:text-accent' : 'mr-4 font-medium hover:text-accent'}`}>Eve</button>
                    </div>
                    <div className='float-right'>
                      <span onClick={() => minus1day()} className='font-bold text-2xl mr-2 mb-6 pb-2  hover:text-accent hover:cursor-pointer'>{`–`}</span>
                      <span className='text-xl font-bold'>{sessionDate}</span>
                      <span  onClick={() => plus1Day()} className='mr-6 ml-1 font-bold mb-6 text-2xl hover:text-accent hover:cursor-pointer'>+</span>
                    </div>
                    
                </div>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-20 mb-4">
                      <div className="text-center leading-[3rem] sm:text-sm">Winning Numbers</div>
                      <div className='text-center sm:text-lg text-2xl font-bold'>{winningNumbers}</div>
                      
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-32 md:h-64 ">
                      <div className="text-center">Hot</div>
                        <div className='flex'>
                          <div className="flex-1 text-center"></div>
                          <div className="flex-1 text-center">
                            <span className={`${winningNumbersArr.includes(currentHot[0]) ? "text-accent" : ""}`}>{currentHot[0] + " "}</span>
                          </div>
                          <div className="flex-1 text-center"></div>
                          <div className="flex-1 text-center">
                            <span className={`${winningNumbersArr.includes(currentHot[2]) ? "text-accent" : ""}`}>{currentHot[2] + " "}</span>
                          </div>
                        </div>
                      <div className='flex'>
                        <div className="flex-1 text-center">
                        <span className={`${winningNumbersArr.includes(currentHot[3]) ? "text-accent" : ""}`}>{currentHot[3] + " "}</span>
                        </div>
                        <div className="flex-1 text-center"></div>
                        <div className="flex-1 text-center">
                          <span className={`${winningNumbersArr.includes(currentHot[1]) ? "text-accent" : ""}`}>{currentHot[1] + " "}</span>
                        </div>
                        <div className="flex-1 text-center"></div>
                      </div>
                      
              
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-32 md:h-64">
                      <div className="text-center">Cold</div>
                      <div className='flex'>
                        <div className="flex-1 text-center"></div>
                        <div className="flex-1 text-center">
                          <span className={`${winningNumbersArr.includes(currentCold[0]) ? "text-accent" : ""}`}>{currentCold[0] + " "}</span>
                        </div>
                        <div className="flex-1 text-center"></div>
                        <div className="flex-1 text-center">
                          <span className={`${winningNumbersArr.includes(currentCold[2]) ? "text-accent" : ""}`}>{currentCold[2] + " "}</span>
                        </div>
                      </div>
                      <div className='flex'>
                        <div className="flex-1 text-center">
                          <span className={`${winningNumbersArr.includes(currentCold[1]) ? "text-accent" : ""}`}>{currentCold[1] + " "}</span>
                        </div>
                        <div className="flex-1 text-center"></div>
                        <div className="flex-1 text-center">
                          <span className={`${winningNumbersArr.includes(currentCold[3]) ? "text-accent" : ""}`}>{currentCold[3] + " "}</span>
                        </div>
                        <div className="flex-1 text-center"></div>
                      </div>
                      
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-32 md:h-64">
                    <div className="text-center">Overdue</div>
                      <div className='flex'>
                          <div className="flex-1 text-center"></div>
                          <div className="flex-1 text-center">
                            <span className={`${winningNumbersArr.includes(currentOverdue[0]) ? "text-accent" : ""}`}>{currentOverdue[0] + " "}</span>
                          </div>
                          <div className="flex-1 text-center"></div>
                          <div className="flex-1 text-center">
                          <span className={`${winningNumbersArr.includes(currentOverdue[2]) ? "text-accent" : ""}`}>{currentOverdue[2] + " "}</span>
                          </div>
                        </div>
                        <div className='flex'>
                          <div className="flex-1 text-center">
                            <span className={`${winningNumbersArr.includes(currentOverdue[1]) ? "text-accent" : ""}`}>{currentOverdue[1] + " "}</span>
                          </div>
                          <div className="flex-1 text-center"></div>
                          <div className="flex-1 text-center">
                            <span className={`${winningNumbersArr.includes(currentOverdue[3]) ? "text-accent" : ""}`}>{currentOverdue[3] + " "}</span>
                          </div>
                          <div className="flex-1 text-center"></div>
                        </div>
            
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-32 md:h-64">
                    <div className="text-center">Repeat</div>
                      <div className='flex'>
                          <div className="flex-1 text-center"></div>
                          <div className="flex-1 text-center">
                            <span className={`${winningNumbersArr.includes(currentRepeat[0]) ? "text-accent" : ""}`}>{currentRepeat[0] + " "}</span>
                          </div>
                          <div className="flex-1 text-center"></div>
                          <div className="flex-1 text-center">
                            <span className={`${winningNumbersArr.includes(currentRepeat[2]) ? "text-accent" : ""}`}>{currentRepeat[2] + " "}</span>
                          </div>
                      </div>
                      <div className='flex'>
                          <div className="flex-1 text-center">
                          <span className={`${winningNumbersArr.includes(currentRepeat[1]) ? "text-accent" : ""}`}>{currentRepeat[1] + " "}</span>
                          </div>
                          <div className="flex-1 text-center"></div>
                          <div className="flex-1 text-center">
                            <span className={`${winningNumbersArr.includes(currentRepeat[3]) ? "text-accent" : ""}`}>{currentRepeat[3] + " "}</span>
                          </div>
                          <div className="flex-1 text-center"></div>
                      </div>
                      
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                    <div className="text-center">Predictions</div>
                    <div className='text-center'>{mapLines}</div>
                  </div>
                  <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-72 md:h-72 overflow-scroll overflow-x-hidden">
                    <div className="text-center">Recent Results</div>
                    <div className=''>
                      {resultz}
                    </div>
                  </div>
                  <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72 overflow-scroll overflow-x-hidden">
                    <div className="text-center row">
                      <button onClick={() => toggleFiPaSuDuTri('filter')} className='w-1/5'>Filter</button>
                      <button onClick={() => toggleFiPaSuDuTri('patterns')} className='w-1/5'>Patterns</button>
                      <button onClick={() => toggleFiPaSuDuTri('subPatterns')} className='w-1/5'>Subpatterns</button>
                      <button onClick={() => toggleFiPaSuDuTri('doubles')} className='w-1/5'>Doubles</button>
                      <button onClick={() => toggleFiPaSuDuTri('triples')} className='w-1/5'>Triples</button>
                    </div>
                    <div className='overflow-scroll overflow-x-hidden'>
                    {
                      showFiltered ? (<Filtered results={recentResults} winningNumbersArr={winningNumbersArr} />) : (showPattern)
                        ? (<Patterns results={recentResults} winningNumbersArr={winningNumbersArr} />) : (showSubPatterns)
                            ? (<Subpatterns results={recentResults} winningNumbersArr={winningNumbersArr} />) : (showDoubles)
                              ? (<Doubles results={recentResults} winningNumbersArr={winningNumbersArr} />) : (showTriples)
                                ? (<Triples results={recentResults} winningNumbersArr={winningNumbersArr} />) : ('')
                    }
                    </div>
                  </div>
              </div>
            </main>
          </div>
        </div>
      )}
    
    </>
  )
}

export default Fantasy5;