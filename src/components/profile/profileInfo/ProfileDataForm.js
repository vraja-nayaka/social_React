import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, required } from '../../../utils/validators';
import s from './../../../utils/FormsControls.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Button type="submit" variant="contained" color="secondary">
          Сохранить
        </Button>
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <Field
          name="fullName"
          label="Full name"
          type="text"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="aboutMe"
          label="About me"
          type="text"
          component={Input}
          validate={[]}
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Field
              name="lookingForAJob"
              type="checkbox"
              component={Checkbox}
              validate={[]}
            />
          }
          label="Looking for a job"
          labelPlacement="end"
        />
      </div>

      <div>
        <Field
          name="lookingForAJobDescription"
          label="My professional skills"
          type="text"
          component={Input}
          validate={[]}
        />
      </div>
      <div>
        <b>Contacts</b>:{' '}
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key}>
              <Field
                name={'contacts.' + key}
                label={key}
                type="text"
                component={Input}
                validate={[]}
              />
            </div>
          )
        })}
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
)

export default ProfileDataFormReduxForm
