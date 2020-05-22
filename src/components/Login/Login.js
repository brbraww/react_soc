import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                   name={'login'}
                   placeholder={'login'}
                   type="text"
                   validate={[requiredField]}
            />
        </div>
        <div>
            <Field component={Input}
                   name={'password'}
                   placeholder={'password'}
                   type="text"
                   validate={[requiredField]}
            />
        </div>
        <div>
            <Field component={Input} name={'rememberMe'} type="checkbox"/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login',
})(LoginForm)



export default Login;