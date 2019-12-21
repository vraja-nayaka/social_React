import React from "react";
import style from './../profile.module.css';
import { reduxForm, Field } from "redux-form";
import { Input, required } from "../../../utils/validators";
import s from './../../../utils/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>:<Field
                name="fullName"
                type="text"
                component={Input}
                validate={[required]}
            />
        </div>
        <div>
            <b>About me</b>:
            <Field
                name="aboutMe"
                type="text"
                component={Input}
                validate={[]}
            />
        </div>
        <div>
            <b>Looking for a job</b>:
            <Field
                name="lookingForAJob"
                type="checkbox"
                component={Input}
                validate={[]}
            />
        </div>

        <div>
            <b>My professional skills</b>:
            <Field
                name="lookingForAJobDescription"
                type="text"
                component={Input}
                validate={[]}
            />
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    {key}:<Field
                        name={"contacts." + key}
                        type="text"
                        component={Input}
                        validate={[]}
                    />
                </div>
            })}
        </div>
    </form>
}


const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;