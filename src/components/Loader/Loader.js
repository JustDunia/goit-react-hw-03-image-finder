import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

export class Loader extends Component {
  render() {
    const isVisible = this.props.isVisible;
    return (
      <div className={styles['loader-wrapper']}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          visible={isVisible}
        />
      </div>
    );
  }
}
