import React, { useState } from 'react'

import { StandardInput } from '@components/atoms'

const styles = {
    margin: '10px'
}

const ExInput = (props) => {

    const [ value, setValue ] = useState('')

    return (
        <>
            Input:
            <StandardInput error type="text" value={value} onChange={(e)=>setValue(e.target.value)} width='250px' styles={styles} placeholder='test' />
        </>
    )
}

export { ExInput }