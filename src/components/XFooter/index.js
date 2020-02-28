import React, { Component } from 'react';
import styles from '../components.less';
import { Row, Col, Input  } from 'antd';
import { images } from '@/assets/js/';

const { Search } = Input;

class XFooter extends Component {
    state = {
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
                <Col span={12} className={styles.mainItem}>
                  <div className={styles.aboutMe}>
                      <div className={styles.title}>About Me</div><b/>
                      <div>
                        <p className={styles.text1}><span>Hi,</span> I'm Laoli丶</p>
                        <p className={styles.text2}>每个人都有自己想要的活法，想做的事不一定非得是远大的目标。我觉得，每天能够准时下班，看看动漫，
                        打打游戏，和喜欢的人聊聊天，心情再好一点的话就做做饭，虽然都是些小事啊，但是能够享受这样的时光就很好了，重要的是开心就好吧</p>
                      </div>
                  </div>
                </Col>
                <Col span={12} className={styles.mainItem}>
                  <div className={styles.aboutMe}>
                      <div className={styles.title}>Send me a letter</div><b/>
                      <div>
                        <p className={styles.text1}>如果你有什么建议，欢迎留言给我！</p>
                        <div className={styles.send}>
                          <Search
                            placeholder="写点什么吧"
                            enterButton="Send"
                            width={400}
                            onSearch={value => console.log(value)}
                          />
                        </div>
                      </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

        );
    }
}

export default XFooter;
