import { useHistory } from 'react-router-dom'
import * as C from './styles'
import { FormActions, useForm } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep1 = () => {

    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        // Starting current step value
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/step2');
        } else {
            alert("Fill in the data.");
        }
    }

    // Function that changes the state value when the onChange event is fired
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 1/3</p>
                <h1>Let's start with your name</h1>
                <p>Fill in the field below with your full name.</p>

                <hr />

                <label>
                    Your full name
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
    )
}