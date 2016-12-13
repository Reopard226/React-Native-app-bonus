'use strict'

import { combineReducers } from 'redux'

import products from './productsReducer'
import session from './sessionReducer'

export default combineReducers({
	products,
	session,
})