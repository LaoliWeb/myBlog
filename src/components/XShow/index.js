import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../components.less';
import { Row, Col } from 'antd';
import { images } from '@/assets/js/';

const lineLen =  Array.apply(null,Array(150));

class XShow extends Component {
    static propTypes = {
        imgs: PropTypes.array, // 图片列表
        style: PropTypes.object, // 基础样式
        tipsStyle: PropTypes.object, // 提示语样式
        autoPlay: PropTypes.bool, // 自动播放
        autoPlayTime: PropTypes.number, // 自动播放间隔，默认3秒
        width: PropTypes.number, // 宽
        width: PropTypes.number, // 高
    }
    static defaultProps = {
    }

    state = {
    }

    componentDidMount() {
    }

    render() {
        const { imgs, style, tipsStyle, width, height } = this.props;
        const { activeSlide } = this.state;

        return (
            <div className={styles.xShow}>
                <div className={styles.showOne}>
                  <Row className={styles.lineCon}>
                    <Col offset={1} span={4} className={styles.lineImg}>
                      <img src={images.common.avatar} alt="img"/>
                    </Col>
                    <Col offset={1} span={16}>
                      <div className={styles.title}>惊！花季少女竟被轮流布置作业</div>
                      <div className={styles.date}>2019/01/01</div>
                    </Col>
                  </Row>
                  <Row className={styles.lineCon}>
                    <Col className={styles.lineText}>
                      每个人都有自己想要的活法，想做的事不一定非得是远大的目标。我觉得，每天能够准时下班，看看动漫， 打打游戏，
                      和喜欢的人聊聊天，心情再好一点的话就做做饭，虽然都是些小事啊，但是能够享受这样的时光就很好了，重要的是开心就好吧
                    </Col>
                  </Row>
                  <Row className={styles.lineCon}>
                    <Col offset={1} span={4} className={styles.endText}>又是极好的一天</Col>
                    <Col offset={13} span={5} className={styles.readMore}>READ MORE</Col>
                  </Row>
                </div>

                <div className={styles.showTwo}>
                  <Row>
                    <Col span={17} className={styles.txtCon}>
                      <div className={styles.title}>惊！花季少女竟被轮流布置作业</div>
                      <div className={styles.date}>2019/01/01</div>
                      <div className={styles.lineText}>每个人都有自己想要的活法，想做的事不一定非得是远大的目标。我觉得，每天能够准时下班，看看动漫， 打打游戏，
                      和喜欢的人聊聊天，心情再好一点的话就做做饭，虽然都是些小事啊，但是能够享受这样的时光就很好了，重要的是开心就好吧每个人都有自己想要的活法，想做的事不一定非得是远大的目标。我觉得，每天能够准时下班，看看动漫， 打打游戏，
                      和喜欢的人聊聊天，心情再好一点的话就做做饭，虽然都是些小事啊，但是能够享受这样的时光就很好了，重要的是开心就好吧</div>
                    </Col>
                    <Col span={7}>
                      <Col span={12} className={styles.imgCon} data-no={'1'}><img src={images.common.avatar} alt="img"/></Col>
                      <Col span={12} className={styles.imgCon} data-no={'2'}><img src={images.common.avatar} alt="img"/></Col>
                      <Col span={12} className={styles.imgCon} data-no={'3'}><img src={images.common.avatar} alt="img"/></Col>
                      <Col span={12} className={styles.imgCon} data-no={'4'}><img src={images.common.avatar} alt="img"/></Col>
                    </Col>
                  </Row>
                </div>

                <div className={styles.showThree}>
                  <div className={styles.threeCon}>
                    <Row className={styles.lineCon}>
                      <Col span={4} className={styles.imgCon}>
                        <img src={images.common.avatar} alt="img"/>
                        <div className={styles.hiddnText}>surprise</div>
                      </Col>
                      <Col offset={2} span={18} className={styles.txtCon}>
                        <div className={styles.title}>惊！花季少女竟被轮流布置作业</div>
                        <div className={styles.date}>2019/01/01</div>
                        <div className={styles.lineText}>每个人都有自己想要的活法，想做的事不一定非得是远大的目标。我觉得，每天能够准时下班，看看动漫， 打打游戏，
                        和喜欢的人聊聊天，心情再好一点的话就做做饭，虽然都是些小事啊，但是能够享受这样的时光就很好了，重要的是开心就好吧每个人都有自己想要的活法，想做的事不一定非得是远大的目标。我觉得，每天能够准时下班，看看动漫， 打打游戏，
                        和喜欢的人聊聊天，心情再好一点的话就做做饭，虽然都是些小事啊，但是能够享受这样的时光就很好了，重要的是开心就好吧</div>
                    </Col>
                    </Row>
                    <div className={styles.line} data-no={'1'}></div>
                    <div className={styles.line} data-no={'2'}></div>
                    <div className={styles.line} data-no={'3'}></div>
                  </div>
                </div>

                <div className={styles.showFour}>
                  <div className={styles.imgCon}><img src={images.common.avatar} alt="img"/></div>
                  <Row className={styles.lineCon}>
                    <div className={styles.title_date}>
                        <div className={styles.title}>惊！花季少女竟被轮流布置作业</div>
                        <div className={styles.date}>2019/01/01</div>
                    </div>
                    <div className={styles.lineText}>
                      每个人都有自己想要的活法，想做的事不一定非得是远大的目标。我觉得，每天能够准时下班，看看动漫， 打打游戏，
                      和喜欢的人聊聊天，心情再好一点的话就做做饭，虽然都是些小事啊，但是能够享受这样的时光就很好了，重要的是开心就好吧
                    </div>
                    <Row>
                      <Col offset={1} span={4} className={styles.endText}>又是极好的一天</Col>
                      <Col offset={13} span={5} className={styles.readMore}>READ MORE</Col>
                    </Row>
                  </Row>
                  { lineLen.map(() => <i></i> ) }
                </div>
            </div>
        );
    }
}

export default XShow;
