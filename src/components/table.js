import React from 'react';
import { useSelector } from 'react-redux';
import Rows from './rows';
import '../styles/style.scss';


export default function Table({ state }) {
    const routes = useSelector(state => state.routes.routes);
    
    return (
            <table className={state ? 'table table-whatsapp' : 'table table-facebook'}>
                <thead>
                    <tr className='rows-titles'>
                        <th className='titles' scope='col'>route</th>
                        <th className='titles' scope='col'>title</th>
                        <th className='titles' scope='col'>nodes</th>
                        <th className='titles' scope='col'>go to node</th>
                        <th className='titles' scope='col'>delete node</th>
                    </tr>
                </thead>
                <tbody>
                    {routes.map(r => (
                        <Rows route={r} key={r.id} state={state} />
                    ))}
                </tbody>
            </table>

    );
};

