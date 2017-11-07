import React ,{ Component } from 'react';
import { render } from 'react-dom';

class Resume extends Component {
  render() {
    return 'hello Resume!'
  }
} 

render(
  <Resume />,
  document.getElementById('root')
)