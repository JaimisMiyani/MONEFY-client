import React from 'react'

const DisplayMessage = ({message}) => {
    return (
        <div className='p-3' style={{backgroundColor:'#fad586', margin:'5px', width:'fit-content'}}>
            {message}
        </div>
    )
}

export default DisplayMessage
