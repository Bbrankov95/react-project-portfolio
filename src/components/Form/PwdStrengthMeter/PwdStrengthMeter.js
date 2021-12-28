import zxcvbn from "zxcvbn";
import PwdMeterLabel from "./PwdMeterLabel";
import classes from './PwdStrengthMeter.module.scss';

const PwdStrengthMeter = ({
    password
}) => {
    const testedResult = zxcvbn(password);
    return (
        <div className={classes["str-meter"]}>
            <progress
            className={classes[`pwd-strength-${PwdMeterLabel(testedResult.score)}`]}
            value={testedResult.score} 
            max='4' />
            <br />
            <label className="str-meter-label">
                {password ? <>
                    <strong>Password Strength:</strong>{PwdMeterLabel(testedResult.score)}
                </>
                    : ''}
            </label>
        </div>
    );
}

export default PwdStrengthMeter;