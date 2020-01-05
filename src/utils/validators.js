import React from 'react'
import style from './FormsControls.module.css'

import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'



export const required = value =>
  value || typeof value === 'number'
    ? undefined
    : 'Для отправки необходимо заполнить поле'

    export const requiredMessage = value =>
  value || typeof value === 'number'
    ? undefined
    : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined


const maxLength = max => value =>
  value && value.length > max
    ? `Максимальная длина - ${max} символов`
    : undefined

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
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      type={type}
      
      {...input}
      {...custom}
    />
  )
 
export const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)