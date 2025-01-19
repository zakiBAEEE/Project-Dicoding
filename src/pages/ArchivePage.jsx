import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import useSearch from '../customHooks/useSearch';

function ArchivePage() {
    const [keyword, onChangeKeywords] = useSearch();
    const [archive, setArchive] = useState([]);

    React.useEffect(() => {
        const catatan = getArchivedNotes();
        setArchive(catatan)
    }, [])

    const archivesFilter = archive.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase()) && note.archived;
    })

    return (
        <section className='archives-page'>
            <h2>Catatan Arsip</h2>
            <SearchBar keyword={keyword} onChangeKeyword={onChangeKeywords} />
            {
                archivesFilter.length > 0 ? (<NoteList notes={archivesFilter} />) : (<section className='notes-list-empty'>
                    <p className='notes-list__empty'>Tidak Ada Arsip Catatan</p>
                </section>)
            }
        </section>
    )
}

export default ArchivePage

