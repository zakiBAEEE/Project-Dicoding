import PropTypes from 'prop-types';
import React from 'react';

function SearchBar({ keyword, onChangeKeyword }) {
    return (
        <section className='search-bar'>
            <input type="text"
                placeholder='Cari Berdasarkan Judul'
                value={keyword}
                onChange={(event) => {
                    onChangeKeyword(event.target.value)
                }} />
        </section>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    onChangeKeyword: PropTypes.func.isRequired
}

export default SearchBar;