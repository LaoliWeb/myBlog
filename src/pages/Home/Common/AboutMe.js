import React, { Component } from 'react';
import styles from './style.less';
import { images } from '@/assets/js/';

class AboutMe extends Component {
    state = {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={styles.aboutMe}>
                <div className={styles.title}>About Me</div>
                <b/>
                <img src={images.common.avatar} alt="头像" className={styles.avatar}/>
                <div>
                  <p className={styles.text1}><span>Hi,</span> I'm Laoli丶</p>
                  <p className={styles.text2}>每个人都有自己想要的活法，想做的事不一定非得是远大的目标。我觉得，每天能够准时下班，看看动漫，
                  打打游戏，和喜欢的人聊聊天，心情再好一点的话就做做饭，虽然都是些小事啊，但是能够享受这样的时光就很好了，重要的是开心就好吧</p>
                </div>
            </div>
        );
    }
}

export default AboutMe;
