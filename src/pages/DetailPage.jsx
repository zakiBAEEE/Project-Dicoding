import React, { useContext, useState } from 'react';
import { getNote } from '../utils/api';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { deleteNote } from '../utils/api';
import { archiveNote } from '../utils/api';
import { unarchiveNote } from '../utils/api';
import LocaleContext from '../contexts/LocaleContext';

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);
    const { locale } = useContext(LocaleContext);

    React.useEffect(() => {
        getNote(id).then(({ data }) => { setNote(data) })
    }, [])

    async function onDeleteNote() {
        await deleteNote(id);
        navigate('/')
    }

    async function onArchineNote() {
        await archiveNote(id);
        navigate('/')
    }

    async function onUnArchiveNote() {
        await unarchiveNote(id);
        navigate('/');
    }

    if (note == null) {
        return locale === 'id' ? <p>Data Kosong</p> : <p>Empty Data</p>
    }

    return (
        <NoteDetail {...note} onDelete={onDeleteNote} onArchive={onArchineNote} onUnArchive={onUnArchiveNote} />
    )
}

export default DetailPage

