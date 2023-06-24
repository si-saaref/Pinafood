import Home from '../views/pages/Home';
import Detail from '../views/pages/detail';

const routes = {
	'/': Home,
	'/home': Home,
	'/restaurant/:id': Detail,
};

export default routes;
