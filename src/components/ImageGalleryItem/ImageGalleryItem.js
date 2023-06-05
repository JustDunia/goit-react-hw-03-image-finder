import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalVisible: false,
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };
  render() {
    const { smallPic, bigPic, tags } = this.props;
    return (
      <li className={styles.imageGalleryItem}>
        <img
          className={styles['imageGalleryItem-image']}
          src={smallPic}
          alt={tags}
          onClick={() => {
            this.setState({ isModalVisible: true });
          }}
        />
        {this.state.isModalVisible && (
          <Modal src={bigPic} onModalClosing={this.closeModal} tags={tags} />
        )}
      </li>
    );
  }
}
