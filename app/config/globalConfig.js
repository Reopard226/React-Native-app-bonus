'use strict'

export default {
	apiEntry: '/app-web/servlet',
	productsRequestEndpoint: '/awslisprdc',
	productsRequestFormat: null,
	loginRequestEndpoint: '/awslogusuap',
	loginRequestFormat: ( userId , password , idType ) => (

		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<app:wslogusuap.Execute>'
		+ '<app:Tipdoccod>' + idType + '</app:Tipdoccod>'
		+ '<app:Prsnrodoc>' + userId + '</app:Prsnrodoc>'
		+ '<app:Usucla>' + password + '</app:Usucla>'
		+ '</app:wslogusuap.Execute>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>'

	),
	userInfoRequestEndpoint: '/awslisctapt',
	userInfoRequestFormat: ( userId ) => (

		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<app:wslogusuap.Execute>'
		+ '<app:Ctaprscod>'+ userId +'</app:Ctaprscod>'
		+ '</app:wslogusuap.Execute>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>'

	),
	WSServerAddress: 'http://200.62.147.188:8080',
}