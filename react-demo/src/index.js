import React, { Component } from 'react';
import { render } from 'react-dom';

const List = ({ list }) => {
  console.log(list);
  return (
    <ul>
      {
        list.map((value, index) => (
          <li key={index}>{value}</li>
        ))
      }
    </ul>
  )
}

class ErrorTitle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }
  
  componentDidCatch(err, info) {
    console.log(err);
    this.setState({
      error: true
    })
  }

  render() {
    console.log(this.state)
    if (this.state.error) {
      return <h2>Oops! you app has a problem!</h2>
    }
    return this.props.children;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  changeUContent = value => {
    this.setState({
      list: [
        value,
        ...this.state.list
      ]
    })
  }

  changeState = () => {
    this.setState({
      list: ''
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
          <input type="text" onFocus={this.bindFcuntion} onChange={event => this.changeUContent(event.target.value)}/>
          <ErrorTitle>
            <List list={this.state.list} />
          </ErrorTitle>
          <button onClick={this.changeState}>click me!</button>
      </div>
    )
  }
};
render(
  <App />,
  document.getElementById('root')
);