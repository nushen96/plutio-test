import React, {useState} from 'react';
import {Tasks} from '/imports/api/tasks'
import {create} from '/imports/api/tasks/methods/create'

const AddForm = () => {
    const [text, setText] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(text) {
            create({
                title: text.trim(),
                status: "incomplete",
                dueDate: new Date(),
            })
        }
        setText("")
    }
    const checkSubmit = e => {
        e.preventDefault;
        if(e && e.keyCode===13) {
            document.forms[0].submit()
        }
    }
    return (
        <form className="add-task" noValidate="" onKeyPress={checkSubmit} onSubmit={handleSubmit}>
          <div>
            <div className="fieldset add-task-input fieldset-stripped">
              <div className="fieldset-content">
                <label className="fieldset-label">
                  <span className="fieldset-label-content has-icon">
                    <i className="icon-plus" />
                  </span>
                  <input
                    className=""
                    name="title"
                    placeholder="Add new task"
                    type="text"
                    autoComplete="off"
                    value={text}
                    onChange={e => setText(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
    )
}

export default AddForm;