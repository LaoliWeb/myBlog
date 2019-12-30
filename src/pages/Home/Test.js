import React, { Component } from 'react';
import styles from './Test.less';
import XSlide from '@/components/XSlide';
class Test extends Component {
  state = {
    activeSlide: 0
  }

  render() {
    const { activeSlide } = this.state;
    
    return (
      <div>
        <div>
          <XSlide/>
        </div>
      </div>
    );
  }
}

export default Test;
