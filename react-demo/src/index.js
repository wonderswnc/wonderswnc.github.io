import React, { Component } from 'react';
import { render } from 'react-dom';


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

  render() {
    return (
      <div>
          <input type="text" onFocus={this.bindFcuntion} onChange={event => this.changeUContent(event.target.value)}/>
          <ul>
            {
              this.state.list.map((value,index) => (
                <li key={index}>{value}</li>
              ))
            }
          </ul>
      </div>
    )
  }
};
render(
  <App />,
  document.getElementById('root')
);