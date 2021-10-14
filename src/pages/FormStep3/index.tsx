import { Link, useHistory } from 'react-router-dom';
import * as C from './styles'
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log("Form finished");
            console.log(state);
        } else {
            alert("Fill in the data");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 3/3</p>
                <h1>Cool {state.name}, where do we find you?</h1>
                <p>Fill in your contacts so we can get in touch.</p>

                <hr />

                <label>
                    What is your e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    What is your GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Previous</Link>
                <button onClick={handleNextStep}>Finish Registration</button>
            </C.Container>
        </Theme>
    )
}