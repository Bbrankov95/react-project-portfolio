import classes from './Notification.module.scss';

const Notification = (text,isValid,icon) => {
    return(
        <div className={classes["body"]}>
            <p className={isValid ? classes.valid : classes.error}><i>{text}</i>{text ? <span className={classes.icon}>{icon}</span> : ''}</p>
        </div>
    );
}

export default Notification;