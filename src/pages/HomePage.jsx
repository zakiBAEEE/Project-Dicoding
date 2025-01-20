import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useSearchParams, useNavigate } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { FiPlusCircle } from 'react-icons/fi';
import { getActiveNotes } from '../utils/api';
import useSearch from '../customHooks/useSearch';
import LocaleContext from '../contexts/LocaleContext';

function HomePage() {
    const [keyword, onChangeKeywords] = useSearch()
    const [initializing, setInitializing] = useState(true)
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => { setNotes(data) })
        setInitializing(false);
    }, [])

    function onTambahNotes() {
        navigate('/notes/new')
    }

    const noteFilter = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase()) && !note.archived;
    })

    if (initializing === true) {
        return null
    }

    return (
        <section className='homepage'>
            {
                locale == 'id' ? <h2>Catatan Aktif</h2> : <h2>Active Notes</h2>
            }

            <SearchBar keyword={keyword} onChangeKeyword={onChangeKeywords} />
            {
                noteFilter.length > 0 ? (<NoteList notes={noteFilter} />) : (<section className='notes-list-empty'>
                    {
                        locale == 'id' ? <p className='notes-list__empty'>Tidak Ada Catatan</p> : <p className='notes-list__empty'>Theres no Notes</p>
                    }

                </section>)
            }

            <div className='homepage__action'>
                <button className='action' type='button' title='Tambah' onClick={onTambahNotes}>
                    <FiPlusCircle />
                </button>
            </div>

        </section>

    )
}

export default HomePage

