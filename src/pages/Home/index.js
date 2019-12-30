import React, { Component } from 'react';
import { XSlide, XShow, XErrText } from "@/components";
import { NavMenu, AboutMe } from "./Common";
import styles from './home.less';

class Home extends Component {
  state = {
    showNav: true
  }

  render() {
    const { showNav } = this.state;
    return (
      <div>
          <XSlide/>
          <div className={styles.navCon}>
            <div className={styles.nav} data-active={showNav}><NavMenu /></div>
          </div>
          <div className={styles.mainCon}>
            <div className={styles.show}>
              <XShow />
            </div>
            <div className={styles.about}><AboutMe /></div>
            <div className={styles.myTitle}>
              {/* <span>LAOLI丶</span> */}
              <XErrText text='I like you,but just like you'/>
            </div>
            <div className={styles.about}><AboutMe /></div>
            {/* <div className={styles.show}>
              <XShow />
              <XShow />
              <XShow />
            </div> */}
          </div>
      </div>
    );
  }
}

export default Home;
