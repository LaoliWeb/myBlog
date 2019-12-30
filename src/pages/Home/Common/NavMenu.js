import React, { Component } from 'react';
import styles from './style.less';
import { images } from '@/assets/js/';

const navList = [
    { key: 'life', text: 'life' },
    { key: 'music', text: 'music' },
    { key: 'computer', text: 'video' },
    { key: 'picture', text: 'picture' },
    { key: 'note', text: 'note' },
    { key: 'cloud', text: 'cloud' },
    { key: 'compass', text: 'future' },
]

class NavMenu extends Component { 
    state = {
    }

    componentDidMount() {
    }

    keyValueChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <div className={styles.navMenu}>
                <ul className={styles.navMenuCon} style={{width: `${navList.length*140 + 40}px`}}>
                {
                    navList.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className={styles.navIcon} style={{ background: `url(${images.icon_50.icon}) ${images.icon_50[item.key]}`}}></div>
                                <div className={styles.navText}>{item.text}</div>
                                <b></b>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default NavMenu;
