'use strict'

import React from 'react'
import {
	Dimensions,
	Navigator,
	Text,
} from 'react-native';

import CatalogContainer from './CatalogContainer';
import CouponsContainer from './CouponsContainer';
import HomeContainer from './HomeContainer';
import PointsContainer from './PointsContainer';
import ProductContainer from './ProductContainer';
import SessionContainer from './SessionContainer';
import WalletContainer from './WalletContainer';

export default class AppNavigator extends React.Component
{

	_renderScene( route , navigator ) {

		switch ( route.name ) {

			case 'Catalog':
				return <CatalogContainer    { ...this.props } navigator={ navigator } category={ route.category }/>;

			case 'Home':
				return <HomeContainer 		{ ...this.props } navigator={ navigator }/>;

			case 'Wallet':
				return <WalletContainer 	{ ...this.props } navigator={ navigator }/>;

			case 'Points':
				return <PointsContainer 	{ ...this.props } navigator={ navigator }/>;

			case 'Product':
				return <ProductContainer 	{ ...this.props } navigator={ navigator } product={ route.product }/>;

			case 'Coupons':
				return <CouponsContainer 	{ ...this.props } navigator={ navigator } category={ route.category } view="Coupon"/>

			case 'CouponConfirm':
				return <CouponsContainer 	{ ...this.props } navigator={ navigator } category={ route.category } view="Confirm"/>

			default:
				return <Text style={ { marginTop: 25 , texAlign: 'center' } }>
					{`Navigator went to undefiend route ${route.name}`}
				</Text>

		}

	}

	render() {

		return(
			<Navigator
				configureScene={ (route) => ({ ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight }) }
				initialRoute={ { name: 'Home' } }
				renderScene={ (route , navigator ) => this._renderScene( route , navigator )}
		        style={ { width: Dimensions.get('window').width } }
			/>
		);

	}

}