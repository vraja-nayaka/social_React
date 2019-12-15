import React, { useState, useEffect } from 'react';
import s from './../profile.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        props.isOwner && setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            <b>Статус: </b>
            {!editMode &&
                <div
                    className={s.status}
                    onDoubleClick={activateEditMode}
                >
                    <div>
                        <span >{props.status || ""}</span>
                    </div>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                        value={status} />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;