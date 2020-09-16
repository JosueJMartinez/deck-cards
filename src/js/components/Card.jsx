import React, { Component, Fragment } from 'react';
import '../../css/Card.css';

export default class Card extends Component {
	render() {
		const { image, value, suit, degree, xAxis, yAxis } = this.props.card;

		return (
			<Fragment>
				{image && <img className='Card' 
					style={{
						transform: `rotate(${degree}deg) translate(${xAxis}px, ${yAxis}px)`,
					}}
				src={image} alt={`${value} of ${suit}`} />}
				
			</Fragment>
		);
	}
}
