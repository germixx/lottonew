'use client';

import Loading from '../../../../../components/Loading';

import { useEffect, useState } from 'react'

const Lotto = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [dataDisplayed, setDataDisplayed] = useState(true);
  const [sessionDate, setSessionDate] = useState(new Date().toLocaleDateString());
  const [winningNumbers, setWinningNumbers] = useState('');
  const [winningNumbersArr, setWinningNumbersArr] = useState([]);
  const [currentHot, setCurrentHot] = useState([]);
  const [currentCold, setCurrentCold] = useState([]);
  const [currentOverdue, setCurrentOverdue] = useState([]);
  const [currentRepeat, setCurrentRepeat] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [lines, setLines] = useState([]);
  const [showPattern, setShowPattern] = useState(false);
  const [showFiltered, setShowFiltered] = useState(true);
  const [showSubPatterns, setShowSubPatterns] = useState(false);
  const [showDoubles, setShowDoubles] = useState(false);
  const [showTriples, setShowTriples] = useState(false);
  const [recentResults, setRecentResults] = useState('');


  const mapLines = lines.map((e) => { 

    let temp = e.sequence.split('-');

    return <div key={e.sequence}>
        <span className={`${winningNumbersArr.includes(temp[0]) ? "text-accent" : ""}`}>{temp[0]}</span>-<span className={`${winningNumbersArr.includes(temp[1]) ? "text-accent" : ""}`}>{temp[1]}</span>-<span className={`${winningNumbersArr.includes(temp[2]) ? "text-accent" : ""}`}>{temp[2]}</span>-<span className={`${winningNumbersArr.includes(temp[3]) ? "text-accent" : ""}`}>{temp[3]}</span>-<span className={`${winningNumbersArr.includes(temp[4]) ? "text-accent" : ""}`}>{temp[4]}</span> <span style={{ color: 'green' }}>{e.played ? '✔' : ''}</span> <span style={{ color: 'orange', fontSize: '12px', fontWeight: 'bold' }}>{e.quickPick === true || e.quickPick === 'true' ? 'QP' : ''}</span>
    </div>
  })

  return (
    <div>
        {
          isLoading ? (
            <div className="antialiased flex flex-row min-h-screen justify-center items-center">
              <main className=" md:ml-64 h-auto pt-20">
                <Loading />
              </main>
            </div>
          ) : dataDisplayed ? (
            <div>
              <div className="antialiased">
                <main className="p-4 md:ml-64 h-auto pt-20">
                  <div className='text-center text-2xl font-bold underline decoration-double'>FL Lotto</div>
                    <div className='flex flow-root'>
                      <div className='float-left ml-6'>
                        {/* <button  onClick={() => changeSession('mid')} className={`${session === 'mid' ? 'text-accent mr-4 font-medium hover:text-accent' : 'mr-4 font-medium hover:text-accent'}`}>Mid</button> */}
                        {/* <button  onClick={() => changeSession('eve')}  className={`${session === 'eve' ? 'text-accent mr-4 font-medium hover:text-accent' : 'mr-4 font-medium hover:text-accent'}`}>Eve</button> */}
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
                      {/* {resultz} */}
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
                    {/* {
                      showFiltered ? (<Filtered results={recentResults} winningNumbersArr={winningNumbersArr} />) : (showPattern)
                        ? (<Patterns results={recentResults} winningNumbersArr={winningNumbersArr} />) : (showSubPatterns)
                            ? (<Subpatterns results={recentResults} winningNumbersArr={winningNumbersArr} />) : (showDoubles)
                              ? (<Doubles results={recentResults} winningNumbersArr={winningNumbersArr} />) : (showTriples)
                                ? (<Triples results={recentResults} winningNumbersArr={winningNumbersArr} />) : ('')
                    } */}
                    </div>
                  </div>
              </div>
                </main>
              </div>
            </div>
          ) : (
            <div className="antialiased flex flex-row min-h-screen justify-center items-center">
              <main className=" md:ml-64 h-auto pt-20">
                <div>Nothing to display</div>
              </main>
            </div>
          )
        }


    </div>
  )
}

export default Lotto