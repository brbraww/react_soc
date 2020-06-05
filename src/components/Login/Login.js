import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from './../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {createField(
            Input,
            'email',
            'email',
            'text',
            [requiredField])
        }
        {createField(
            Input,
            'password',
            'password',
            'password',
            [requiredField])
        }
        {createField(
            Input,
            'rememberMe',
            null,
            'checkbox',
            [],
            {},
            'remember me.')
        }

        {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
        {props.captchaUrl && createField(Input,'captcha', 'Введите каптчу', 'text', [requiredField])}

        {props.error &&
        <div className={classes.formSummaryError}>
            {props.error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login',
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})

export default connect(mapStateToProps,{login})(Login);