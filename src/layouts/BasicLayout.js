import { Component } from 'react';
import styles from './BasicLayout';

class BasicLayout extends Component {
    state={
    }

    render(){
        const { children } = this.props;

        return (
            <div className={styles.normal}>
                {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
                {children}
            </div>
        )
    }
}
export default BasicLayout;
