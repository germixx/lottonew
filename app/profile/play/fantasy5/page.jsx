'use client';
import Loading from '../../../components/Loading';
import { useEffect, useState } from 'react';

const Fantasy5 = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    
  }, [])

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-32 md:h-64 ">
                      <div className="text-center">Hot</div>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-32 md:h-64">
                      <div className="text-center">Cold</div>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-32 md:h-64">
                    <div className="text-center">Overdue</div>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-32 md:h-64">
                    <div className="text-center">Repeat</div>
                  </div>
                </div>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 h-96 mb-4">
                  <div className="text-center">Winning Numbers</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72 overflow-y-scroll text-wrap">
                    <article className="text-wrap">
                    <p className="text-wrap">Lorem Ipsum is simply dummy text of the printing and typesettin since the 1ambled it et she like Aldus rem Ipsum. 
                    printingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprrintingprintinntgprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprintingprinting</p>
                      </article>
                      </div>
                  <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                    </div>
                  <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                    </div>
                  <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                    </div>
                </div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                </div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                </div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                </div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

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