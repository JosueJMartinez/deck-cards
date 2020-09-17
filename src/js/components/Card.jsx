import React, { Component, Fragment } from 'react';
import '../../css/Card.css';

export default class Card extends Component {
	render() {
		const { image, alt, cssTransform } = this.props.card;

		return (
			<Fragment>
				{image && (
					<img
						className="Card"
						style={{
							transform: cssTransform
						}}
						src={image}
						alt={`${alt}`}
					/>
				)}
			</Fragment>
		);
	}
}
