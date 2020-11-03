import React, { useEffect, useState } from 'react';

function BreatheIn(){

    const [breathState, setBreatheState] = useState('Breathe in')

    useEffect(()=> {
        breatheInStart()
    }, [])

    const breatheInStart = () => {
        setInterval(()=>{
            setTimeout(()=> {
                setBreatheState('Breathe out');
            }, 4000);
            setBreatheState('Breathe in');
        }, 8000)
        setTimeout(()=> {
            setBreatheState('Breathe out');
        }, 4000);
    }

    return(
        <div className="breatheIn">
            <div className="breatheIn__bigCircle">
                <div className="breatheIn__smallCircle" id="smallCircle">
                    <p className="breatheIn__smallCircle--heading">{breathState}</p>
                </div>
            </div>
        </div>
    )
}

export default BreatheIn