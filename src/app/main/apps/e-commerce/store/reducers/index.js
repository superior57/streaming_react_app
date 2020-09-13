import { combineReducers } from 'redux';
import order from './order.reducer';
import orders from './orders.reducer';
import product from './product.reducer';
import products from './products.reducer';

const reducer = combineReducers({
	products,
	product,
	orders,
	order
});

export default reducer;
