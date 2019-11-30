import React from 'react'
import style from './FormsControls.module.css'

export const required = value => (value || typeof value === 'number' ? undefined : 'Для отправки необходимо заполнить поле')

const maxLength = max => value =>
    value && value.length > max ? `Максимальная длина - ${max} символов` : undefined
export const maxLength30 = maxLength(30)

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
