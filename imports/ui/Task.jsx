import React from 'react'
import Icon from './reusable/Icon'
import Tag from './reusable/Tag'
//Add tags
const Task = ({ title, isChecked, hasDescription, commentsCount, filesCount, iconTimer, tags, color }) => {
    let displayedIcons = []
    hasDescription && displayedIcons.push("icon-description")
    commentsCount > 0 && displayedIcons.push("icon-chat")
    filesCount > 0 && displayedIcons.push("icon-attach")
    iconTimer > 0 && displayedIcons.push("icon-timer")
    
    const colorStyle = color ? { borderColor: color } : null
    return (
        <div className="task">
            <a 
                className={color ? "task-link has-color-tag" : "task-link"} 
                href="#" 
                style={colorStyle}
            >
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
                    {
                        displayedIcons.length > 0 && (
                            <div className="indicators">
                                {displayedIcons.map(iconName => (<Icon key={iconName} name={iconName} />))}
                            </div>
                        )
                    }
                    {
                        tags.length > 0 && (
                            <div className="custom-fields">
                                {tags.map(tag => <Tag tagText={tag} />)}
                            </div>
                        )
                    }
                </div>
            </a>
        </div>
    );
}

export default Task;