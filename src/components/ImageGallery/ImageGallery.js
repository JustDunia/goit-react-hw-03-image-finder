import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import { PropTypes } from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <ul className={styles.gallery}>
          {images.map(img => {
            return (
              <ImageGalleryItem
                key={img.id}
                smallPic={img.webformatURL}
                bigPic={img.largeImageURL}
                tags={img.tags}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
};
