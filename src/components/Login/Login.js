import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from './../common/FormsControls/FormsControls.module.css'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps,{login})(Login);