import Home from '../views/pages/Home';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorite';

const routes = {
	'/': Home,
	'/home': Home,
	'/restaurant/:id': Detail,
	'/favorites': Favorites,
};

export default routes;
