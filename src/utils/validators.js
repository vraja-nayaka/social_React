import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './FormsControls.module.css'

export const required = value => (value || typeof value === 'number' ? undefined : 'Для отправки необходимо заполнить поле')

const maxLength = max => value =>
    value && value.length > max ? `Максимальная длина - ${max} символов` : undefined
export const maxLength30 = maxLength(30)

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue13 = minValue(13)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const tooYoung = value =>
    value && value < 13
        ? 'You do not meet the minimum age requirement!'
        : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined
export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined

export const Textarea = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div className={`${style.formControl} ${touched && error && style.error}`}>
                <textarea {...input} placeholder={placeholder} type={type} />
                <div>
                    {touched &&
                        ((error && <span>{error}</span>) ||
                            (warning && <span>{warning}</span>))}
                </div>
            </div>
        </div>
    )

    export const Input = ({
        input,
        label,
        type,
        placeholder,
        meta: { touched, error, warning }
    }) => (
            <div>
                <label>{label}</label>
                <div className={`${style.formControl} ${touched && error && style.error}`}>
                    <input {...input} placeholder={placeholder} type={type} />
                    <div>
                        {touched &&
                            ((error && <span>{error}</span>) ||
                                (warning && <span>{warning}</span>))}
                    </div>
                </div>
            </div>
        )

const FieldLevelValidationForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                
                label="Username"

                warn={alphaNumeric}
            />
            <Field
                name="email"
                type="email"
                
                label="Email"
                validate={email}
                warn={aol}
            />
            <Field
                name="age"
                type="number"
                
                label="Age"
                validate={[required, number, minValue13]}
                warn={tooYoung}
            />
            <Field
                name="phone"
                type="number"
                
                label="Phone number"
                validate={[required, phoneNumber]}
            />
            <div>
                <button type="submit" disabled={submitting}>
                    Submit
          </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
          </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)