import React , { Component } from 'react';
import { render } from 'react-dom';
import './pictureGallary.less';
import { range } from './util';

class Picture extends Component {
  state = {
    showBack: false
  }

  changeView() {
    this.props.currentCenter ? 
    this.setState(state => ({showBack: !state.showBack})) : 
    this.props.currentCenterIndex(this.props.index);
  }

  render() {

    const { showBack } = this.state;
    const style = this.props.overStyle;

    return (
      <div className="picture-box" style={{... style}} onClick={this.changeView.bind(this)}>
        <div className={`picture-content ${showBack ? 'rotate' : ''}`}>
          <div className="picture-wrapper">
            <img src="../images/roasting_img_1.jpg" alt=""/>
          </div>
          <h3>测试图片</h3>
        </div>
          <div className={`picture-description ${showBack ? '' : 'rotate'}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto saepe, quam inventore fuga quaerat voluptatem provident expedita ea debitis ad!
          </p>
        </div>
      </div>
    )
  }
}

class PictureGallary extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      picturePositionArray: new Array(12).fill('')
    };
    this.getRandom = this.getRandom.bind(this);
    this.getOverStyle = this.getOverStyle.bind(this);
    this.currentCenterIndex = this.currentCenterIndex.bind(this);
  }

  componentDidMount() {
    this.currentCenterIndex(1);
  }
  
  getRandom(start, end) {
    return start + (Math.random() * (end - start) | 0);
  }

  getOverStyle(isLeft) {
    const style = {};
    style.top = `${this.getRandom(-150, 800)}px`;
    if (isLeft) {
      style.left = `${this.getRandom(-150, 450)}px`;
    } else {
      style.right = `${this.getRandom(-150, 450)}px`;
    }
    style.transform = `rotate(${this.getRandom(-90, 90)}deg)`;
    return style;
  }

  currentCenterIndex(index) {
    let { picturePositionArray } = this.state, 
          length = picturePositionArray.length,
          leftIndexArray = range(length),
          newPositionArray = [];
    leftIndexArray = leftIndexArray.sort(() => Math.random() * 0.5).slice(0, (length / 2 | 0));
    for (let i = 0;i < length;i ++) {
      console.log(leftIndexArray.indexOf(i) !== -1);
      leftIndexArray.indexOf(i) !== -1 ? 
      newPositionArray.push(this.getOverStyle(true)) : 
      newPositionArray.push(this.getOverStyle(false));
    }
    newPositionArray[index] = {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '999'
    };
    this.index = index;
    this.setState({
      picturePositionArray: newPositionArray
    })
  }

  render() {
    const { picturePositionArray } = this.state;
    return (
      <div className="gallary">
        {
          this.state.picturePositionArray.map((item, index) => (
            <Picture overStyle={item} key={index} index={index} 
                     currentCenter={this.index === index ? true : false}
                     currentCenterIndex={this.currentCenterIndex}/>
          ))
        }
        <div className="gallary-tab">
          {
            this.state.picturePositionArray.map((item, index) => (
              <div className={`gallary-tab-item ${this.index === index ? 'active' : ''}`} onClick={() => this.currentCenterIndex(index)}></div>
            ))
          }
        </div>
      </div>
    )
  }
}

render(
  <PictureGallary />,
  document.getElementById('root')
)