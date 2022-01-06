

const validateInput = (id,value) => {
    switch(id) {
        case 'username':
            const usernameRegex = /^[a-zA-Z0-9_.]{3,15}$/gm;
            const userValid = usernameRegex.exec(value);
            if(userValid) {
                return true
            } else {
                return false
            }
        case 'email':
            const emailRegex = /\w{3,}\@\w{2,}\.[a-z]{2,}/gm;
            const emailValid = emailRegex.exec(value);
            if(emailValid) {
                return true;
            } else {
                return false;
            }
        case 'password':
            const passRegex = /^\w*[A-Z]+\w*$/gm;
            const passwordValid = passRegex.exec(value);
            if(passwordValid && (passwordValid[0].length > 4 && passwordValid[0].length < 15)) {
                return true;
            } else {
                return false;
            }
    }
}

export default validateInput;