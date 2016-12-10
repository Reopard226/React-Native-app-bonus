'use strict'

import axios from 'axios'

import axiosBaseConfig from '../config/axiosBaseConfig'
import globalConfig from '../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export function requestLogin( credentials = { userId: '' , password: '' , idType: '' } ) {

	return function(dispatch){

		dispatch({ type: 'SESSION:REQUESTING_LOGIN' })

		const requestSettings = { 
			...axiosBaseConfig,
			data: globalConfig.loginRequestFormat( credentials.userId , credentials.password , credentials.idType ),
			url: globalConfig.loginRequestEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let userId = doc.getElementsByTagName('Prscod')[0].textContent;

			if ( responseMessage == 'Exito' && errorCode == '0'  )
				dispatch({ type: 'SESSION:REQUEST_LOGIN_SUCCEEDED' , payload: userId })
			else
				dispatch({ type: 'SESSION:REQUEST_LOGIN_REJECTED' , payload: responseMessage })

			dispatch({ type: 'SESSION:REQUESTING_LOGIN' })

		})

		.catch((err) => {
			dispatch({ type: 'SESSION:REQUEST_LOGIN_REJECTED' , payload: err })
			dispatch({ type: 'SESSION:REQUESTING_LOGIN' })
		})

	}

}

export function requestUserInfo( credentials = { userId: '' } ) {

	return function(dispatch){

		dispatch({ type: 'SESSION:REQUESTING_USER_INFO' })

		const requestSettings = { 
			...axiosBaseConfig,
			data: globalConfig.userInfoRequestFormat( credentials.userId ),
			url: globalConfig.userInfoRequestEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let returnedUserId = doc.getElementsByTagName('Prsnrodoc')[0].textContent;

			let user = {}
			user.name = doc.getElementsByTagName('Prsnomape')[0].textContent;
			// user.accountType = doc.getElementsByTagName('PCtaTip')[0].textContent;
			// user.accountTypeName = doc.getElementsByTagName('PCtaTipNom')[0].textContent;
			// user.accountAutCnj = doc.getElementsByTagName('PCtaAutCnj')[0].textContent;
			// user.availableBalance = doc.getElementsByTagName('CtaSalDsp')[0].textContent;
			// user.conBalance = doc.getElementsByTagName('CtaSalCon')[0].textContent;
			// user.currentBalance = doc.getElementsByTagName('CtaSalVig')[0].textContent;
			// user.pointsCode = doc.getElementsByTagName('TipPunCod')[0].textContent;

			console.log( user );

			if ( responseMessage == 'Exito' && errorCode == '0'  )
				dispatch({ type: 'SESSION:REQUEST_USER_INFO_SUCCEEDED' , payload: user })
			else
				dispatch({ type: 'SESSION:REQUEST_USER_INFO_REJECTED' , payload: responseMessage })

			dispatch({ type: 'SESSION:USER_INFO_REQUESTED' })

		})

		.catch((err) => {
			dispatch({ type: 'SESSION:REQUEST_USER_INFO_REJECTED' , payload: err })
			dispatch({ type: 'SESSION:USER_INFO_REQUESTED' })
		})

	}

}

export function updateLoggedInState( loggedInState = 'unknown' ) {

	switch ( loggedInState ) {

		case 'loggedIn':
			return function( dispatch ) {
				dispatch( { type: 'SESSION:LOGGED_IN' } )
			}

			break

		case 'loggedOut':
			return function( dispatch ) {
				dispatch( { type: 'SESSION:LOGGED_IN' } )
			}

			break

		default:
			return function( dispatch ) {
				dispatch( { type: 'SESSION:LOGGED_IN_STATE_UNKOWN' } )
			}

			break
	}

}