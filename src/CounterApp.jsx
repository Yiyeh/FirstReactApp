import { useState } from 'react'
// import PropTypes from 'prop-types'
 
export default function CounterApp( {value} ) {

    const [ counter, setCounter ] = useState ( value )

    const handleAdd = (event, newValue) => {
        setCounter ( counter + 1 );
    };

    const handleSub = (event, newValue) => {
        setCounter ( counter - 1 );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSub}> -1 </button>
        </>
    )
    
}


