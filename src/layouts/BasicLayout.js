import { Component } from 'react';
import { XFooter } from "@/components";
import styles from './BasicLayout.less';

class BasicLayout extends Component {
    state={
    }

    render(){
        const { children } = this.props;

        return (
            <div className={styles.layoutCon}>
              {children}
              <XFooter />
            </div>
        )
    }
}
export default BasicLayout;
