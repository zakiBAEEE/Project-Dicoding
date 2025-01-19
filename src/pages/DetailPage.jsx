import React, { useState } from 'react';
import { getNote } from '../utils/local-data';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { deleteNote } from '../utils/local-data';
import { archiveNote } from '../utils/local-data';
import { unarchiveNote } from '../utils/local-data';

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notes, setNotes] = useState(null);

    React.useEffect(() => {
        const catatan = getNote(id);
        setNotes(catatan);
    }, [])

    function onDeleteNote() {
        deleteNote(id);
        navigate('/')
    }

    function onArchineNote() {
        archiveNote(id);
        navigate('/')
    }

    function onUnArchiveNote() {
        unarchiveNote(id);
        navigate('/');
    }

    if (notes == null) {
        return (
            <p>Data Kosong</p>
        )
    }

    return (
        <NoteDetail {...notes} onDelete={onDeleteNote} onArchive={onArchineNote} onUnArchive={onUnArchiveNote} />
    )
}

export default DetailPage

