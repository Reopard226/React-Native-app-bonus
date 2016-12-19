'use strict'

import _initialState from '../initialstate/coupons'

export default function reducer( state = _initialState , action ) {
	
	switch ( action.type ) {

		case 'COUPONS::REQUESTING_BONUSCOUPONS':
			return {
				...state,
				loading: true
			}

			break

		case 'COUPONS::REQUESTED_BONUSCOUPONS_SUCCEEDED':
			return {
				...state,
				bonusCoupons: action.payload,
				loading: false,
				error: null
			}

			break

		case 'COUPONS::REQUESTED_BONUSCOUPONS_REJECTED':
			return {
				...state,
				bonusCoupons: null,
				error: action.payload,
				loading: false
			}

			break

		case 'PRODUCTS::CLEAR_PRODUCTLIST':
			return {
				...state,
				loading: false,
				bonusCoupons: new Array
			}

			break

	}

	return state

} 