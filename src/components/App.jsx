import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    shownHits: 0,
    searchPhrase: '',
    totalHits: 0,
    isLoaderVisible: false,
  };

  BASE_URL = 'https://pixabay.com/api/?';
  API_KEY = '34901628-5648d2abf5d6da9cdaab83e9c';

  fetchData = async url => {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  };

  searchImages = () => {
    this.setState({ isLoaderVisible: true });
    const url = `${this.BASE_URL}key=${this.API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.page}&q=${this.state.searchPhrase}`;
    this.fetchData(url).then(data => {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        totalHits: data.totalHits,
        shownHits: prevState.shownHits + data.hits.length,
        isLoaderVisible: false,
      }));
    });
  };

  searchHandler = query => {
    this.setState(
      {
        page: 1,
        searchPhrase: query.split(' ').join('+'),
        images: [],
        totalHits: 0,
        shownHits: 0,
      },
      this.searchImages
    );
  };

  loadMoreHandler = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      this.searchImages
    );
  };

  render() {
    const { images, totalHits, shownHits, isLoaderVisible } = this.state;
    return (
      <>
        <Searchbar onSearch={this.searchHandler} />
        <ImageGallery images={images} onLoadMoreImages={this.loadMoreHandler} />
        {shownHits < totalHits && (
          <Button onLoadMoreImages={this.loadMoreHandler} />
        )}
        <Loader isVisible={isLoaderVisible} />
      </>
    );
  }

  componentDidMount() {
    this.searchHandler('');
  }
}
