import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';

const List = ({ list }) => {
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

const Hel = ({data}) => {
  console.log('i am refresh ui!');
  return <h2>{data}</h2>
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

class TestState extends PureComponent {

  state = {
    otherState: 'look at me !',
    state1: {
      state2: {
        state3: 'oh, you get it!'
      }
    }
  }

  changeStateHandle = value => {
    this.setState(({state1:{state2:{state3: data}}}) => ({state1:{state2:{state3: value}}}))
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Hel data={this.state.otherState}/>
        <h2>{this.state.state1.state2.state3}</h2>
        <input type="text" onChange={e => this.changeStateHandle(e.target.value)}/>
      </div>
    )
  }

}
render(
  <TestState />,
  document.getElementById('root')
);