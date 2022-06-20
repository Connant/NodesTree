import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteRoute } from '../store/actions';
import '../styles/style.scss';


export default function Rows({ route, state }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const toMain = () => {
        history.push(route.route);
    };

    const deleteUrl = (route) => {
        dispatch(deleteRoute(route));
    };

    return (
        <tr>
            <td>{route.route}</td>
            <td>{route.title}</td>
            <td>{route.nodes}</td>
            <td>
                <button type='button' onClick={toMain} className={state ? 'button button-whatsapp' : 'button button-facebook'}>
                    Перейти
                </button>{' '}
            </td>
            <td>
                {route.route !== '/main' && route.title !== 'Main' && (
                    <button type='button' onClick={() => deleteUrl(route)} className={state ? 'button button-whatsapp' : 'button button-facebook'}>
                        Удалить
                    </button>
                )}
            </td>
        </tr>
    );
};

