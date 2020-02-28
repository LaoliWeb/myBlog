import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../components.less';
import { images } from '@/assets/js/';

class XSlide extends Component {
    static propTypes = {
        imgs: PropTypes.array, // 图片列表
        style: PropTypes.object, // 基础样式
        tipsStyle: PropTypes.object, // 提示语样式
        autoPlay: PropTypes.bool, // 自动播放
        autoPlayTime: PropTypes.number, // 自动播放间隔，默认3秒
        width: PropTypes.number, // 宽
        width: PropTypes.number, // 高
    }
    /**
     * imgs参数设置 [{ key: '', url: '', tips: '' }]
     * @param {Array} imgs
     */
    static defaultProps = {
        imgs: [
            { key: "one", tips: 'I like you,but just like you' },
            { key: "two", tips: 'Let life be beautiful like summer flowers and death like autumn leaves' },
            { key: "three", tips: 'Goals determine what youre going to be' },
            { key: "four", tips: 'A rose by any other name would smell as sweet'}
        ],
        style: {}, // 样式
        tipsStyle: {}, // 提示语样式
        autoPlay: false, // 自动播放
        autoPlayTime: 3, // 自动播放间隔，默认3秒
    }

    state = {
        activeSlide: 0
    }

    componentDidMount() {
        const { imgs, autoPlay, autoPlayTime } = this.props;
        if( autoPlay ) {
            this.automatic = setInterval(() => {
                if (this.state.activeSlide == imgs.length-1) {
                    this.setState({ activeSlide: 0 });
                }else{
                    this.setState({ activeSlide: this.state.activeSlide+1 });
                }
            }, autoPlayTime*1000);
        }
    }

    // 下一张
    nextSlide = () => {
        const { imgs } = this.props;
        var slide = this.state.activeSlide + 1 < imgs.length ? this.state.activeSlide + 1 : 0;
        this.setState({
            activeSlide: slide
        });
    }

    // 上一张
    previousSlide = () => {
        const { imgs } = this.props;
        let slide = this.state.activeSlide - 1 < 0 ? imgs.length - 1 : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    }

    // 图片点击
    onClick = (item,index) => {
        const { onChange } = this.props;
        if( onChange ) onChange(item,index)
    }

    componentWillUnmount() {
        this.automatic && clearInterval(this.automatic);
    }

    render() {
        const { imgs, style, tipsStyle, width, height } = this.props;
        const { activeSlide } = this.state;

        return (
            <div className={styles.slider}>
                {
                    imgs.map((item,index) => {
                        return (
                            <div
                                key={index}
                                className={styles.slider_slide}
                                data-active={index === activeSlide}
                                onClick={() => this.onClick(item,index)}
                                style={{ backgroundImage: `url(${item.url || images.slide[item.key || 'one']})`, ...style, width: width? `${width}px`:null, height: height? `${height}px`: null }}
                            >
                                {
                                    item.tips &&
                                    <div className={`${styles.slider_slide_text} ${styles[`slide_text_${item.key}`]}`} style={{...tipsStyle}} data-active={index === activeSlide}>
                                        <a>{item.tips}</a>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
                {
                    <div className={styles.circle_con}>
                        <div className={styles.circle}>
                        {
                            imgs.map((item,index) => {
                                return (
                                    <i key={index} onClick={() => this.setState({activeSlide: index})} data-active={index === activeSlide}></i>
                                )
                            })
                        }
                        </div>
                    </div>
                }
                <div onClick={this.nextSlide} className={styles.slider_next}>
                    <i style={{ backgroundImage: `url(${images.arrow.right})` }}></i>
                </div>
                <div onClick={this.previousSlide} className={styles.slider_previous}>
                    <i style={{ backgroundImage: `url(${images.arrow.left})` }}></i>
                </div>
            </div>
        );
    }
}

export default XSlide;
