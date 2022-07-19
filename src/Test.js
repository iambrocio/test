import React, { Component } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default class AppClass extends Component {

    // We are setting state and giving it two keys and values
    // newTasks is going to be an object
    // all tasks is gonig to be an array or list
  constructor(props) {
    super(props);
    this.state = {
      newTask: {},
      allTasks: []
    };
    // We are bindding the "this" keyword to our event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  // definfing a event handle change method we are using the event as a parameter and argument
  // in the second line we are destructuring and extracting namd and value from 
  // our object
  // In the line after that we are calling this.setState() to update our current state
  // inside we are using a callback function and using (prevState) as it's argument
  // we then use spread on ...prevState and add an newtask object to it. 
  // inside the object we need a key thats name and it's value "the actual name of name"
  handleChange({ target }){
    const { name, value } = target;
    this.setState((prevState) => ({
      ...prevState,
      newTask: {
        ...prevState.newTask,
        [name]: value,
        id: Date.now()
      }
    }));
  }

  handleSubmit(event){
    event.preventDefault();
    if (!this.state.newTask.title) return;
    this.setState((prevState) => ({
      allTasks: [prevState.newTask, ...prevState.allTasks],
      newTask: {}
    }));
  }

  handleDelete(taskIdToRemove){
    this.setState((prevState) => ({
      ...prevState,
      allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove)
    }));
  }

  render() {
    return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TasksList
          allTasks={this.state.allTasks}
          handleDelete={this.handleDelete}
        />
      </main>
    );
  }
}
