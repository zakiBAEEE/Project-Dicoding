import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { FiArchive } from 'react-icons/fi';
import { FiUpload } from 'react-icons/fi';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';
function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive, onUnArchive }) {
    return (
        <section className='detail-page'>
            <h3 className='detail-page__title'>{title}</h3>
            <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
            <p className='detail-page__body'>
                {body}
            </p>
            <div className='detail-page__action'>
                {
                    archived ? (<button className='action' type='button' title='Aktifkan' onClick={() => { onUnArchive(id) }}>  <FiUpload />

                    </button>) : (<button className='action' type='button' title='Arsipkan' onClick={() => { onArchive(id) }}>  <FiArchive />
                    </button>)
                }

                <button className='action' type='button' title='Hapus' onClick={() => { onDelete(id) }}>
                    <FiTrash />
                </button>
            </div>
        </section>
    )
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnArchive: PropTypes.func.isRequired,
}

export default NoteDetail;