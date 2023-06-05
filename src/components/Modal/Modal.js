import { Component } from 'react';
import styles from './Modal.module.css';
import { PropTypes } from 'prop-types';

export class Modal extends Component {
  handleModalClosing = () => {
    this.props.onModalClosing();
  };
  render() {
    const { src, tags } = this.props;
    return (
      <div className={styles.overlay} onClick={this.handleModalClosing}>
        <div
          className={styles.modal}
          onClick={e => {
            e.stopPropagation();
          }}
        >
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
