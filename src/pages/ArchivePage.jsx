import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/api';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import useSearch from '../customHooks/useSearch';
import LocaleContext from '../contexts/LocaleContext';

function ArchivePage() {
    const [keyword, onChangeKeywords] = useSearch();
    const [archive, setArchive] = useState([]);
    const { locale } = useContext(LocaleContext);

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => { setArchive(data) })
    }, [])

    const archivesFilter = archive.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase()) && note.archived;
    })

    return (
        <section className='archives-page'>
            {
                locale == 'id' ? <h2>Catatan Arsip</h2> : <h2>Archived Notes</h2>
            }

            <SearchBar keyword={keyword} onChangeKeyword={onChangeKeywords} />
            {
                archivesFilter.length > 0 ? (<NoteList notes={archivesFilter} />) : (<section className='notes-list-empty'>
                    {
                        locale == 'id' ? <p className='notes-list__empty'>Tidak Ada Arsip Catatan</p> : <p className='notes-list__empty'>There's No Notess</p>
                    }

                </section>)
            }
        </section>
    )
}

export default ArchivePage

