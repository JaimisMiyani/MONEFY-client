import React from 'react'

const DisplayError = ({ error }) => {
    return (
        <div className='p-3 bg-danger' style={{ margin:'5px'}}>
            {error}
        </div>
    )
}

export default DisplayError
