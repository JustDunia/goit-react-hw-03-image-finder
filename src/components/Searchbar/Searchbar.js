import { Component } from 'react';
import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <>
        <header className={styles.searchbar}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.button} />
            <input
              name="searchInput"
              className={styles.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.query}
            />
          </form>
        </header>
      </>
    );
  }
}
