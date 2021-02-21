import React, {useEffect, useState} from 'react';
import MainMenu from './MainMenu'
import AddForm from './AddForm'
import Task from './Task'
import {get} from "/imports/api/tasks/methods/get"

const toggleCompletion = ({ _id, isChecked }) => {
  Tasks.update(_id, {
    $set: {
      status: status === "completed" ? "incomplete" : "completed"
    }
  })
}

const App = () => {
  const tasks = get()
  const incompleteTasks = tasks.filter(task => task.status==="incomplete");
  const completeTasks = tasks.filter(task => task.status==='completed');
  return (
    <>
      <MainMenu />
      <div className="page">
        <div className="page-header">
          <div className="content has-back-button">
            <div className="back-button">
              <a>
                <i className="icon-chevron-left" />
              </a>
            </div>
            <div className="content-block">
              <div className="page-title">
                <h1>Tasks</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="main-tasks-page content list-view">
          <AddForm />
          {
              <div className="groups-wrapper">
                {
                  incompleteTasks.length > 0 && (
                    <div className="group-container open">
                      <div className="group-head">
                        <p>Incomplete</p>
                      </div>
                      <div className="group-content">
                        {incompleteTasks.map(task => (
                          <Task key={task._id} {...task} />
                        ))}
                      </div>
                    </div>
                  )
                }
                {
                  completeTasks.length > 0 && (
                    <div className="group-container open">
                      <div className="group-head">
                        <p>Completed</p>
                      </div>
                      <div className="group-content">
                        {completeTasks.map(task => (
                          <Task key={task._id} {...task} />
                        ))}
                      </div>
                    </div>
                  )
                }
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default App;
