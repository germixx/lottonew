'use client';

import { useEffect, useState } from 'react';

const MongoSymbol = () => {

    let checkInterval;
    const [showCancel, setShowCancel] = useState(true);
    const [showGo, setShowGo] = useState(false);

    const mongoCheckup = (string = 'axlpoeushdngtuesl') => {
        
        fetch(`/api/us/florida/mongo`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                string
            })
        }).then(res => res.json())
            .then((json) => {
                
                if(!json.status) {
                    setShowCancel(true);
                    return false;
                } else {
                    setShowCancel(false);
                    return true;
                }

            }).catch(err => {
                throw err
            });
    }

    const mongoCreateNextSession = (string = 'axlpoeushdngtuesl') => {
        
        fetch(`/api/us/florida/mongo/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                string
            })
        }).then(res => res.json())
            .then((json) => {

                if(json.status) {
                    
                    setShowCancel(true);

                    setTimeout(() => {

                        window.location.reload(true);

                    }, "4000");
                    
                } else {
                    setShowCancel(false);
                }

            }).catch(err => {
                throw err;
            })
    }

    useEffect(() => {

        (async () => {

            let res = await mongoCheckup();

            if(res) {
                
                clearInterval(checkInterval);

            } else {
            
                checkInterval = setInterval(mongoCheckup, 1200000);
            
            }

        })()

    }, []);

    return (
        <div className='flex'>

            {
                showCancel ? (
                    <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>) : (<svg onClick={() => mongoCreateNextSession()}  className="h-8 w-8 text-green-500 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>)
            }

        </div>
    )
}

export default MongoSymbol;