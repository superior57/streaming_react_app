import { combineReducers } from 'redux';
import board from './board.reducer';
import boards from './boards.reducer';
import card from './card.reducer';

const scrumboardAppReducers = combineReducers({
	boards,
	board,
	card
});

export default scrumboardAppReducers;
