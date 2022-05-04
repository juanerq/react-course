import React from 'react'
import { useCounter } from '../../hook/useCounter'


const CounterWithCustomHook = () => {
    const {state, increment, decrement, reset} = useCounter(1)

    const classButton = 'bg-yellow-400 px-2 rounded mx-2 hover:bg-yellow-300'
    return (
        <>
            <h1 className='text-xl font-bold'>Counter With Hook: { state }</h1>
            <hr className='my-5'/>

            <button className={classButton}
                    onClick={() => increment(2)}> + 2 </button>
            <button className={classButton}
                    onClick={reset}> Reset </button>
            <button className={classButton}
                    onClick={() => decrement()}> - 1 </button>
        </>
    )
}

export default CounterWithCustomHook