import { Component } from 'react';
import styles from './Modal.module.css';
import { PropTypes } from 'prop-types';

export class Modal extends Component {
  handleModalClosing = e => {
    if (e.target === e.currentTarget) this.props.onModalClosing();
  };
  render() {
    const { src, tags } = this.props;
    return (
      <div className={styles.overlay} onClick={this.handleModalClosing}>
        <div className={styles.modal}>
          <img src={src} alt={tags} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    window.addEventListener('keydown', e => {
      e.key === 'Escape' && this.handleModalClosing();
    });
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onModalClosing: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
