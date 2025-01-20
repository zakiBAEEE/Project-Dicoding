import PropTypes from 'prop-types';
import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function SearchBar({ keyword, onChangeKeyword }) {
    const { locale } = React.useContext(LocaleContext)
    return (
        <section className='search-bar'>
            <input type="text"
                placeholder={locale == 'id' ? 'Cari Berdasarkan Judul' : 'Search on Title'}
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