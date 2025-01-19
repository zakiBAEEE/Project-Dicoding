import React from 'react'
import { FiCheck } from 'react-icons/fi';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import useInput from '../customHooks/useInput';

function AddNotesPage() {
    const [title, onChangeTitle] = useInput();
    const [body, onChangeBody] = useInput();
    const navigate = useNavigate();

    function onSubmitEventHandler() {
        addNote({ title, body });
        navigate('/');
    }
    return (
        <section className='add-new-page'>
            <div className='add-new-page__input'>
                <input type="text" className='add-new-page__input__title' placeholder='Masukkan Judul' value={title} onChange={(e) => { onChangeTitle(e.target.value) }} />
                <input type="text" className='add-new-page__input__body' value={body} onChange={(e) => { onChangeBody(e.target.value) }} placeholder='Masukkan Catatan Anda' />
            </div>
            <div className='add-new-page__action'>
                <button type='button' className='action' title='Simpan' onClick={(onSubmitEventHandler)}>
                    <FiCheck />
                </button>
            </div>
        </section>
    )

}
export default AddNotesPage

