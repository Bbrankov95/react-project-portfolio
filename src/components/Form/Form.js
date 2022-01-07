import { useEffect, useState } from 'react';
import classes from './Form.module.scss';
import PwdStrengthMeter from './PwdStrengthMeter/PwdStrengthMeter';
import validateInput from '../../utils/validateInput';
import Notification from '../Notification/Notification';
import { FaCheckCircle, FaQuestionCircle, FaTimesCircle } from 'react-icons/fa';

const defaultState = {
    username: {
        isValid: false,
        value: ''
    },
    email: {
        isValid: false,
        value: ''
    },
    birthDate: {
        isValid: false,
        value: ''
    },
    password: {
        isValid: false,
        value: ''
    },
    rePass: {
        isValid: false,
        value: ''
    }
};

const Form = () => {
    const [formValues, setFormValues] = useState(defaultState);
    const [modal, setModal] = useState(false);
    const [formError, setFormError] = useState('');

    useEffect(()=>{
      onValidateChange('rePass',formValues?.rePass?.value)  
    },[formValues?.password?.value])
    const onInputChange = (id, value) => {
        setFormValues({
            ...formValues,
            [id]: {
                ...formValues?.[id],
                value
            }
        })
        
        onValidateChange(id, value);
    }

    const onValidateChange = (id, value) => {
        const isValid = validateInput(id, value, formValues);
        let error = '';
        if (!isValid && value) {
            if (id === 'rePass') {
                error = "Passwords doesn't match";
            } else if (id === 'birthDate') {
                error = 'You must be atleast 18 years old'
            } else {
                error = `Please enter valid ${id}`;
            }
        }
        setFormValues(formValues => ({
            ...formValues,
            [id]: {
                ...formValues?.[id],
                isValid,
                error,
            }
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (formValues?.username?.isValid &&
            formValues?.email?.isValid &&
            formValues?.password?.isValid &&
            formValues?.rePass?.isValid &&
            formValues?.birthDate?.isValid) {
            setFormValues(defaultState);
            setFormError('');
            setModal(true);
        } else {
            setFormError('All fields must be filled');
        }
    }

    const gotValue = (id) => {
        const value = formValues?.[id]?.value;
        if (value) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className={classes['wrapper']}>
            <form onSubmit={onSubmitHandler} className={classes['form']}>
                {formError ? <p className={classes.formError}>{formError}</p> : ''}
                <label htmlFor="username">Username:</label>
                <input onChange={(e) => onInputChange('username', e.target.value)} type='text' className={gotValue('username') ? `${formValues?.['username']?.isValid ? classes['valid'] : classes['invalid']}` : ''} value={formValues?.username?.value}></input>
                {formValues?.username?.isValid ? Notification('Looks good!', true, <FaCheckCircle />) : Notification(formValues.username.error, false, <FaTimesCircle />)}
                <label htmlFor="email">Email:</label>
                <input onChange={(e) => onInputChange('email', e.target.value)} type='email' className={gotValue('email') ? `${formValues?.['email']?.isValid ? classes['valid'] : classes['invalid']}` : ''} placeholder='example@example.com' value={formValues?.email?.value}></input>
                {formValues?.email?.isValid ? Notification('Looks good!', true, <FaCheckCircle />) : Notification(formValues.email.error, false, <FaTimesCircle />)}
                <label htmlFor="birth-date">Date of Birth:</label>
                <input onChange={(e) => onInputChange('birthDate', e.target.value)} type='date' className={gotValue('birthDate') ? `${formValues?.['birthDate']?.isValid ? classes['valid'] : classes['invalid']}` : ''} name="birth-date" value={formValues?.birthDate?.value}></input>
                {formValues?.birthDate?.isValid ? Notification('Looks good!', true, <FaCheckCircle />) : Notification(formValues.birthDate.error, false, <FaTimesCircle />)}
                <label htmlFor="password">Password:<span className={classes['hint']}><FaQuestionCircle /></span>
                </label>
                {formValues?.password?.isValid ? Notification('Looks good!', true, <FaCheckCircle />) : Notification(formValues.password.error, false, <FaTimesCircle />)}
                <input onChange={(e) => onInputChange('password', e.target.value)} type='password' maxLength='20' className={gotValue('password') ? `${formValues?.['password']?.isValid ? classes['valid'] : classes['invalid']}` : ''} value={formValues?.password?.value}></input>
                <PwdStrengthMeter password={formValues?.password?.value || ''} />
                <label htmlFor="repeat-pass">Repeat Password:</label>
                <input onChange={(e) => onInputChange('rePass', e.target.value)} type='password' className={gotValue('rePass') ? `${formValues?.['rePass']?.isValid ? classes['valid'] : classes['invalid']}` : ''} maxLength='20' value={formValues?.rePass?.value}></input>
                {formValues?.rePass?.isValid ? Notification('Looks good!', true, <FaCheckCircle />) : Notification(formValues.rePass.error, false, <FaTimesCircle />)}
                <button className={classes['btn']} type='submit'>Submit</button>
                {modal ? <div className={classes['overlay']}>
                    <div>
                        <h3>Submited Successfully!</h3>
                        <button onClick={() => setModal(!modal)}>Okay</button>
                    </div>
                </div> : ''}
            </form>
        </div>
    );
}

export default Form;