import React, { useContext } from 'react'
import { FiCheck } from 'react-icons/fi';
import { addNote } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import useInput from '../customHooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

function AddNotesPage() {
    const [title, onChangeTitle] = useInput();
    const [body, onChangeBody] = useInput();
    const navigate = useNavigate();
    const { locale } = useContext(LocaleContext);
    async function onSubmitEventHandler() {
        await addNote({ title, body });
        navigate('/');
    }
    return (
        <section className='add-new-page'>
            <div className='add-new-page__input'>
                <input type="text" className='add-new-page__input__title' placeholder={locale == 'id' ? 'Masukkan Judul' : 'Input Title'} value={title} onChange={onChangeTitle} />
                <input type="text" className='add-new-page__input__body' value={body} onChange={onChangeBody} placeholder={locale == 'id' ? 'Tuliskan Catatanmu' : 'Write your note'} />
            </div>
            <div className='add-new-page__action'>
                <button type='button' className='action' title={locale == 'id' ? 'Simpan' : 'Save'} onClick={(onSubmitEventHandler)}>
                    <FiCheck />
                </button>
            </div>
        </section>
    )

}
export default AddNotesPage

