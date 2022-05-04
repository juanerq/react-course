import { useState } from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter_1: 10,
        counter_2: 20
    })

    const {counter_1, counter_2} = counter

    return (
        <>
            <h1 className='text-2xl'>Counter { counter_1 }</h1>
            <hr className='my-5'/>
            <button className='text-xl bg-purple-600 px-2 rounded hover:bg-purple-500'
                onClick={() => setCounter({ ...counter, counter_1: counter_1 + 1})}>
                +1
            </button>
        </>
    )
}

export default CounterApp