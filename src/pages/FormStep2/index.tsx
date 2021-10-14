import { useHistory, Link } from 'react-router-dom';
import * as C from './styles'
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 2/3</p>
                <h1>{state.name}, what best describes you?</h1>
                <p>Choose the option that best matches your current status, professionally.</p>

                <hr />

                <SelectOption
                    title="I'm a beginner"
                    description="I started programming less than 2 years ago"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="I am a programmer"
                    description="I've been programming for 2 years or more"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className="backButton">Previous</Link>
                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
    )
}