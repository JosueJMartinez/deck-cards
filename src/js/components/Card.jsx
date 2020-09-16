import React, { Component } from 'react';
import '../../css/Card.css';

export default class Card extends Component {
	render() {
		const { image, value, suit, degree } = this.props.card;

		return (
			<div>
				<div
					style={{
						transform: `rotate(${degree}deg),`,
						top: '10px',
						left: '10px'
					}}
				>
					{image && <img src={image} alt={`${value} of ${suit}`} />}
				</div>
				<div
					style={{
						transform: `rotate(${degree}deg)`,
						zIndex: '1'
					}}
				>
					{image && <img src={image} alt={`${value} of ${suit}`} />}
				</div>
			</div>
		);
	}
}
