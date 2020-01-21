import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../components.less';
import { Row, Col } from 'antd';
import { images } from '@/assets/js/';

class XFooter extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    state = {
        activeSlide: 0
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
          <div className={styles.footer}>
            <div className={styles.footerCon}>
              <Row className={styles.mainCon}>
                <Col span={8} className={styles.mainItem}>
                  123
                </Col>
                <Col span={8} className={styles.mainItem}>
                  456
                </Col>
                <Col span={8} className={styles.mainItem}>
                  789
                </Col>
              </Row>
            </div>
          </div>

        );
    }
}

export default XFooter;
