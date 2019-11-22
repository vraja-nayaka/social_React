import React from 'react';
import style from './../profile.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus();
    }

    render() {
        return (<div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}> {this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input
                        autoFocus='true'
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                    />
                </div>
            }
        </div>
        )
    }
}
export default ProfileStatus 