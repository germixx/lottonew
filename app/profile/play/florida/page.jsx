'use client';

import Loading from '../../../../components/Loading';

import { useEffect, useState } from 'react';

const Florida = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [dataDisplayed, setDataDisplayed] = useState(true);

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
                  <div className='text-center text-2xl font-bold underline decoration-double'>FL Games</div>
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

export default Florida;