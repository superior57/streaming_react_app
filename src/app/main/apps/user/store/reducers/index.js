import { combineReducers } from 'redux';
import user from './user.reducer';
import users from './users.reducer';
import product from './product.reducer';
import products from './products.reducer';

const reducer = combineReducers({
	products,
	product,
	users,
	user
});

export default reducer;
