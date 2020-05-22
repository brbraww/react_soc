import React from "react";
import classes from './FormsControls.module.css'


const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={classes.formControl}>

            <div className={classes.mainArea + ' '+ (hasError ? classes.error : '')}>
                {props.children}
            </div>
            <div className={classes.error}>
                { hasError && <span>{meta.error}</span>}
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