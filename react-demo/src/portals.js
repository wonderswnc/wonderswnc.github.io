import React, { Component } from 'react';
import ReactDOM, { render, createPortal } from 'react-dom';
import './style.less';

class Modal extends Component {

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  
  componentDidMount() {
    document.querySelector('body').appendChild(this.el);
  }
  
  componentWillUnmount() {
    document.querySelector('body').removeChild(this.el);
  }
  
  render() {
    return createPortal(
      this.props.children,
      this.el
    )
  }
} 

class Page extends Component {
  state = {
    modal: false
  }
  clickHandle = e => {
    this.setState(state => ({modal: !state.modal}))
  }

  render() {
    return (
      <div>
        <h2>hello modal!</h2>
        <button onClick={this.clickHandle}>click me!</button>
        {
          this.state.modal ? 
          <Modal>
            <div className="modal">
              <h2>you could looked me!</h2> 
            </div>
          </Modal> 
          : null
        }
      </div>
    )
  }
}

render(
  <Page />,
  document.getElementById('root')
)

