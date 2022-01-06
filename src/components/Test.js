const [error, setError] = useState('');
    const [status, setStatus] = useState(false);
    const [pass, setPass] = useState('');

    const onChangeHandler = (e) => {
        setPass(e.target.value)
    }

    const onSubmitHandler = (e) => {
        try {
            e.preventDefault();
            const formData = new FormData(e.target);
            const username = formData.get('username').trim();
            const email = formData.get('email').trim();
            const birthDate = formData.get('birth-date').trim();
            const password = formData.get('password').trim();
            const repeatPass = formData.get('repeat-password').trim();
            const passRegext = /(?=.*[A-Z])[A-Za-z0-9]{5,}/gm;

            if (username === '' || email === '' || birthDate == '' || password === '' || repeatPass === '') {
                throw new Error('All fields are required');
            }

            if (username.length < 3) {
                throw new Error('Username must be atleast 3 characters long');
            }

            const match = passRegext.exec(password)

            if (!match) {
                throw new Error('Invalid password');
            }

            if (password !== repeatPass) {
                throw new Error('Passwords does not match');
            }
            setError('');
            e.target.reset();
            setStatus(true);
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className={classes['wrapper']}>
            <form onSubmit={onSubmitHandler} className={classes['form']}>
                {error ? <div className={classes['error']}><p>{error}</p></div> : ''}
                <label htmlFor="username">Username:</label>
                <input type='text' name="username"></input>
                <label htmlFor="email">Email:</label>
                <input type='email' name="email" placeholder='example@example.com'></input>
                <label htmlFor="birth-date">Date of Birth:</label>
                <input type='date' name="birth-date"></input>
                <label htmlFor="password">Password:<p className={classes['hint']}>?</p>
                </label>
                <input onChange={onChangeHandler} type='password' maxLength='15' name="password"></input>
                <PwdStrengthMeter password={pass} />
                <label htmlFor="repeat-pass">Repeat Password:</label>
                <input type='password' maxLength='15' name="repeat-password"></input>
                <button className={classes['btn']} type='submit'>Submit</button>
                {status ? <div className={classes['overlay']}>
                    <div>
                        <h3>Submited Succesfully!</h3>
                        <button onClick={()=>setStatus(!status)}>Okay</button>
                    </div>
                </div> : ''}
            </form>
        </div>
    );