'use strict'

import { combineReducers } from 'redux'

import coupons from './couponsReducer'
import products from './productsReducer'
import session from './sessionReducer'

export default combineReducers({
	coupons,
	products,
	session,
})