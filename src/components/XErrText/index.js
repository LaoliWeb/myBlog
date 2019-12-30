/**
 *  故障文字效果
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../components.less';
import { Row, Col } from 'antd';
import { images } from '@/assets/js/';

class XErrText extends Component {
    static propTypes = {
        text: PropTypes.string, // 文字
        width: PropTypes.number, // 宽度
        size: PropTypes.number, // 文字大小
    }

    static defaultProps = {
        text: 'Just Do It',
        width: 600,
        size: 32,
    }

    state = {
        activeSlide: 0
    }

    componentDidMount() {
    }

    render() {
        const { text, width, size } = this.props;
        return (
          <div className={styles.XErrText}>
            <div className={styles.text} style={{  width: `${width}px`, fontSize: `${size}px` }} data-word={text}>
              {text}
              <div className={styles.white}></div>
            </div>
          </div>

        );
    }
}

export default XErrText;
