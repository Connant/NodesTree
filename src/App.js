import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './components/main';

export default function App() {
    const routes = useSelector(state => state.routes.routes);
    return (
        <Router>
            {routes.map(r => (
                <Route exact path={r.route} component={Main} key={r.id} />
            ))}
        </Router>
    );
}

