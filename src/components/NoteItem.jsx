import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt }) {
    return (
        <article className='note-item'>
            <h3 className='note-item__title'>
                <Link to={`notes/${id}`}>{title}</Link>
            </h3>
            <p className='note-item__createdAt'>{showFormattedDate(createdAt)}</p>
            <p className='note-item__body'>{body}</p>
        </article>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}

export default NoteItem;