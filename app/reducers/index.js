// 'use strict'

import { combineReducers } from 'redux'

import coupons from './couponsReducer'
import products from './productsReducer'
import session from './sessionReducer'
import shopping from './shoppingReducer'

export default combineReducers({
	coupons,
	products,
	session,
	shopping,
})