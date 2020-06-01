import React from "react";
import classes from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;
    return(
        <div className={classes.formControl}>

            <div className={classes.mainArea + ' '+ (hasError ? classes.error : '')}>
                {children}
            </div>
            <div className={classes.error}>
                { hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}

export const createField = (component,name, placeholder, type, validate, props = {}, text='') => {
    return <div>
        <Field component={component}
               name={name}
               placeholder={placeholder}
               type={type}
               validate={validate}
               {...props}
        /> {text}
    </div>
}