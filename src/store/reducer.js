

export const ActionType = {
    ADD: 'ADD',
    DELETE: 'DELETE'
}

const initialState = {
    routes: [
        {
            route: '/main',
            title: 'Main',
            nodes: '',
            id: 1
        }
    ]
};

const parenNode = (value, route) => {
    let createPath = value.split('/');
    createPath.pop();
    createPath = createPath.join('/');

    const previousRoute = route.find(routes => routes.route === createPath)

    return previousRoute;
};


export const routesReducer = (state = initialState, action) => {


    const routes = state.routes.concat(action.payload);
    
    switch (action.type) {

        case ActionType.ADD: {
            const parentRoute = parenNode(action.payload.route, routes);
            parentRoute.nodes++;
            return { ...state, routes };
        }

        case ActionType.DELETE:

            const pathMain = action.payload.route[-1];
            const parentRoute = parenNode(action.payload.route, state.routes);

            let editedRoutes = state.routes.filter(r => {
                if (r.id === action.payload.id) {
                    parentRoute.nodes += r.nodes;
                    return false;
                } else {
                    return true;
                }
            });

            parentRoute.nodes--;

            editedRoutes.forEach(routes => {
                if (routes.route.includes(action.payload.route)) {
                    console.log(routes);
                    let pattern = `^${action.payload.route}`;
                    let re = new RegExp(pattern);

                    routes = state.routes.filter(el => el.route !== re);
                }
            }); 

            return { ...state, routes: editedRoutes };

        default:
            return state;
    }
};

// editedRoutes.forEach(routes => {
//     if (routes.route.includes(action.payload.route)) {
        
//         let pattern = `^${action.payload.route}`;
//         let re = new RegExp(pattern);

//         console.log(re);

//         routes = state.routes.filter(el => re.exec(el));
//     }
