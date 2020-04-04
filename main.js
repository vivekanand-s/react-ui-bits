import React, { useState, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { TextField, CheckBox, RadioButton }  from '@components/Inputs'
import Button  from '@components/Button'
import TypoGraphy from '@components/TypoGraphy'


const styles = {
    margin: '10px'
}

const selects = new Set()

const App = () => {

    const [ value ,setValue ] = useState('')

    const [ selectedVal, setSelectedVal ] = useState('female')
    const handleChange = (event) => {
        setSelectedVal(event.target.value)
    }

    const handleCheckBox = label => {
        if(selects.has(label)) {
            selects.delete(label)
        }
        else {
            selects.add(label)
        }
    }

    return (
        <React.Fragment>
            <div style={styles}>
                <TextField  value={value} onChange={(e) => setValue(e.target.value)} label='Email' variant="default" error />
                <TextField type="password" value={value} onChange={(e) => setValue(e.target.value)} label='Password' variant="standard" error />
                <TextField  value={value} onChange={(e) => setValue(e.target.value)} label='Password' variant="outlined" error />
                <TextField label='Email' onChange={(e) => setValue(e.target.value)} variant="default" />
                <TextField label='Password' value={value} onChange={(e) => setValue(e.target.value)} variant="standard" />
                <TextField label='Password'value={value} onChange={(e) => setValue(e.target.value)}  variant="outlined" className="test-class"/>
            </div>

            <div style={styles}>
                <Button color="primary" variant="contained" tagName="a" href="/a">PRIMARY</Button>
                <Button color="disabled" variant="defaults">OUTLINED</Button>
                <Button variant="defaults">DEFAULT</Button>
            </div>

            <div style={styles}>
                <TypoGraphy>h1</TypoGraphy>
                <TypoGraphy variant='h2'>h2</TypoGraphy>
                <TypoGraphy variant='h5'>h6</TypoGraphy>
                <TypoGraphy component='h2'>h1</TypoGraphy>
                <TypoGraphy component='div'>h1</TypoGraphy>
            </div>

            <div style={styles}>
                <CheckBox name='gender' value='male' label='Male' checked={true} handleCheckboxChange={handleCheckBox} />
                <CheckBox name='gender' value='female' label='Female' checked={true} handleCheckboxChange={handleCheckBox} />
                <CheckBox name='gender' value='other' label='Other' handleCheckboxChange={handleCheckBox} />
            </div>

            <div style={styles}>
                <RadioButton name='gender' value='male' label='Male' checked={selectedVal} onChange={handleChange} />
                <RadioButton name='gender' value='female' label='Female' checked={selectedVal} onChange={handleChange} />
                <RadioButton name='gender' value='other' label='Other' checked={selectedVal} onChange={handleChange} />
            </div>
            
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))  