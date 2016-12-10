'use strict'

import _initialState from '../initialstate/session'

export default function reducer( state = _initialState , action ) {
	
	switch ( action.type ) {

		case 'SESSION:LOGGED_IN':
			return {
				...state, 
				loggedIn: true
			}

			break

		case 'SESSION:LOGGED_OUT':
			return {
				...state, 
				loggedIn: false
			}

			break

		case 'SESSION:LOGGED_IN_STATE_UNKOWN':
			return state

			break

		case 'SESSION:REQUEST_LOGIN_SUCCEEDED':
			return {
				...state,
				user: {
					...state.user,
					id: action.payload
				},
				error: null
			}

			break

		case 'SESSION:REQUEST_LOGIN_REJECTED':
			return {
				...state,
				error: action.payload
			}

			break

		case 'SESSION:REQUEST_USER_INFO_SUCCEEDED':
			return {
				...state,
				user: {
					...state.user,
					...action.payload
				}
			}

			break

		case 'SESSION:REQUESTING_LOGIN':
			return {
				...state,
				loading: true
			}

			break

		case 'SESSION:LOGIN_REQUESTED':
			return {
				...state,
				loading: false
			}

			break

		case 'SESSION:REQUESTING_USER_INFO':
			return {
				...state,
				loading: true
			}

			break

		case 'SESSION:USER_INFO_REQUESTED':
			return {
				...state,
				loading: false
			}

			break

	}

	return state

} 