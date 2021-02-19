import React from 'react';
import MainMenu from './MainMenu'
import AddForm from './AddForm'
import Task from './Task'
import { useTracker } from "meteor/react-meteor-data"
import { Tasks } from '/imports/api/tasks'

const toggleCompletion = ({ _id, isChecked }) => {
  Tasks.update(_id, {
    $set: {
      status: status === "completed" ? "incomplete" : "completed"
    }
  })
}

const App = () => {
  const incompleteTasks = Tasks.find({}).fetch()
    const completeTasks = []
  /*
    const completeTasks = useTracker(() =>
    Tasks.find({ status: "completed" }, { sort: { title: 1 } }).fetch())*/
  console.log(incompleteTasks)
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
                          <Task {...task} />
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
                          <Task {...task} />
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
