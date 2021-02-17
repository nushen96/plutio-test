import React from 'react';
import Icon from './reusable/Icon'

const Task = ({ title, isChecked, hasDescription, commentsCount, filesCount, iconTimer }) => {
    let displayedIcons = []
    hasDescription && displayedIcons.push("icon-description")
    commentsCount>0 && displayedIcons.push("icon-chat")
    filesCount>0 && displayedIcons.push("icon-attach")
    iconTimer>0 && displayedIcons.push("icon-timer")
    console.log(displayedIcons)
    return (
        <div className="task">
            <a className="task-link" href="#">
                <div className="task-link-head">
                    <div className="task-checkbox">
                        <label className="checkbox">
                            <input 
                                type="checkbox" 
                                checked={!!isChecked}
                                onClick={() => console.log("Task checked!")}
                                readOnly
                            />
                            <span className="checkbox-toggle">
                                <i className="checkbox-icon icon-check" />
                            </span>
                        </label>
                    </div>
                    <div className="task-title">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="task-link-body">
                    <div className="indicators">
                        {displayedIcons.map(iconName => (<Icon name={iconName} />))}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Task;