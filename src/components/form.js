
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRoute } from '../store/actions';
import { nanoid } from 'nanoid'
import '../styles/style.scss';


export default function Form ({ state }) {
    const pathname = window.location.pathname;
    const [form, setForm] = useState({ title: '', route: '' });

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const { title, route } = form;

        const newRoute = {
            title,
            route: pathname + '/' + route,
            nodes: 0,
            id: nanoid().toString()
        };

        dispatch(addRoute(newRoute));

        setForm({ title: '', route: '' });
    };

    const changeInputHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    // className={clsx({'button whatsapp': whatsapp, 'button facebook': facebook })}

    return (
        <form className='form' onSubmit={handleSubmit}>

            <div className='form-group'>
                <label htmlFor='route'>Route</label>
                <input required type='text' className={state ? 'form-input form-input-whatsapp' : 'form-input form-input-facebook'} onChange={changeInputHandler} maxLength='15' id='route' value={form.route} name='route'/>
                
                <label htmlFor='title'>Title</label>
                <input required type='text' className={state ? 'form-input form-input-whatsapp' : 'form-input form-input-facebook'} onChange={changeInputHandler} maxLength='15' id='title' value={form.title} name='title'/>
            </div>

            <button type='submit'
                className={state ? 'button button-whatsapp' : 'button button-facebook'}
            >
                Создать
            </button>
        </form>
                
    );
};

