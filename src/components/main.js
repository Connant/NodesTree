import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './header';
import Form from './form';
import Table from './table';

export default function Main() {
    const routes = useSelector(state => state.routes.routes);
    const [stateWA, setStateWA] = useState();

    const pathname = window.location.pathname;

    const changeTheme = () => routes.map(node => {
        if (node.route === pathname) {
            return setStateWA(node.route === pathname && node.nodes === 0);
        }
    })

    useEffect(() => {
        changeTheme();
    });

    // console.log(stateWA)

    return (
        <div>
            <Header state={stateWA} />
            <Form state={stateWA} />
            <Table state={stateWA} />

        </div>
    );
};

