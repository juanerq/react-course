import { useState } from 'react'

export const useCounter = ( initialState = 10) => {
    const [state, setState] = useState(initialState)

    return {
        state,
        increment: ( factor = 1 ) => {
            setState( state + factor)
        },
        decrement: ( factor = 1 ) => {
            setState( state - factor)
        },
        reset: () => {
            setState(initialState)
        }
    }

}
