import { Component } from 'react';
import styles from './Button.module.css';

export class Button extends Component {
  handleLoadingMoreImages = () => {
    this.props.onLoadMoreImages();
  };
  render() {
    return (
      <button onClick={this.handleLoadingMoreImages} className={styles.button}>
        Load more
      </button>
    );
  }
}
