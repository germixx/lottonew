'use client';

import Loading from '../../../../components/Loading';

import { useEffect, useState } from 'react'

const MegaMillions = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [dataDisplayed, setDataDisplayed] = useState(false);

  return (
    <div>
      {
        isLoading ? (
          <div className="antialiased flex flex-row min-h-screen justify-center items-center">
              <main className=" md:ml-64 h-auto pt-20">
                <Loading />
              </main>
            </div>
            ) : dataDisplayed ? ('') : (
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

export default MegaMillions