import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementAsync } from './counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)

  return (
    <div>
        <div>
            <button
                aria-label='Increment value'
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <sapn>{count}</sapn>
            <button
                aria-label='Decrement value'
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
        <div>
            <input 
                aria-label='Set incrementAmout'
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
                aria-label='Add amount value'
                onClick={() => dispatch(incrementByAmount(Number(incrementAmount || 0)))}
            >
                Add Amount
            </button>
            <button
                aria-label='Add Async'
                onClick={() => dispatch(incrementAsync(Number(incrementAmount || 0)))}
            >
                Add Async
            </button>
        </div>
    </div>
  )
}

export default Counter