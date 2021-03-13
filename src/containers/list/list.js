import React from "react";
import "../list/list.css";

const tasks = [];

function ListItem(props) {
  return <p className="list-item">{props.value}</p>;
}

function TodoList(props) {
  const task = props.task;
  const listItems = task.map((taskInList) => (
    <ListItem key={taskInList} value={taskInList} />
  ));

  return <div>{listItems}</div>;
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(console.log("A task was inserted: " + this.state.value));
    tasks.push(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="task-container">
        <div className="input">
          <form onSubmit={this.handleSubmit}>
            <label>
              Task
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input type="submit" value="submit"></input>
            </label>
          </form>
        </div>
        <div className="list-container">
          <TodoList task={tasks} />
        </div>
      </div>
    );
  }
}

export default List;
