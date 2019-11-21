import React from 'react';
import style from './../profile.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: 'hello'
    }
    
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (<div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}> {this.state.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input
                        autoFocus='true'
                        onBlur={this.deactivateEditMode.bind(this)}
                        value={this.state.status}
                    />
                </div>
            }
        </div>
        )
    }
}
export default ProfileStatus 