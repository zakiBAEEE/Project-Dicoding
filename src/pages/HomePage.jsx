import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getAllNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';
import { FiPlusCircle } from 'react-icons/fi';
import { addNote } from '../utils/local-data';
import useSearch from '../customHooks/useSearch';

function HomePage() {
    const [keyword, onChangeKeywords] = useSearch()
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);

    React.useEffect(() => {
        const catatan = getAllNotes();
        setNotes(catatan);
    }, [])

    function onTambahNotes() {
        navigate('/notes/new')
    }

    const noteFilter = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase()) && !note.archived;
    })

    return (
        <section className='homepage'>
            <h2>Catatan Aktif</h2>
            <SearchBar keyword={keyword} onChangeKeyword={onChangeKeywords} />
            {
                noteFilter.length > 0 ? (<NoteList notes={noteFilter} />) : (<section className='notes-list-empty'>
                    <p className='notes-list__empty'>Tidak Ada Catatan</p>
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

