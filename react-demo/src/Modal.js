import React, { Component } from 'react';
import { render } from 'react-dom';
import './modal.less';

class Modal extends Component {

  render() {

    const { showModal, head, children, onCancel } = this.props;

    return (
      <div className={`modal ${showModal ? 'modal-show' : ''}`}>
        <div className="modal--mask"></div>
        <div className={`modal-detail ${showModal ? 'modal-detail-show' : ''}`}>
          <div className="modal-close" onClick={() => onCancel()}><span>&times;</span></div>
          <div className="modal-head">
            <h2>{ head }</h2>
          </div>
          <div className="modal-content">
            { children }
          </div>
        </div>
      </div>
    )
  }
}

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  changeModalView() {
    this.setState(state => ({showModal: !state.showModal}))
  }

  render() {
    return (
      <div>
        <button onClick={this.changeModalView.bind(this)}>click me!</button>
        <Modal head="新建的一个模态框"
               showModal={this.state.showModal}
               onCancel={this.changeModalView.bind(this)} >
          <p>我是一个测试文本, 啦啦啦啦啦啦！！！！</p>
        </Modal>
      </div>
    )
  }
}

render(
  <Wrapper />,
  document.getElementById('root')
)