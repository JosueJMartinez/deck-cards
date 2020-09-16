import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import '../../css/Deck.css';

export default class Deck extends Component {
	state = {
		deck_id: '',
		drawnCards: [],
		remaining: 0
	};

	async componentDidMount() {
		try {
			const res = await Axios.get(
				'https://deckofcardsapi.com/api/deck/new/shuffle/'
			);
			this.setState({
				deck_id: res.data.deck_id,
				remaining: res.data.remaining
			});
		} catch (err) {
			console.log('axios failed retrieving deck id');
		}
	}

	handleClick = e => {
		this.drawCard();
	};

	async drawCard() {
		try {
			const res = await Axios.get(
				`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`
			);

			this.setState(prevState => {
				return {
					drawnCards: [
						...prevState.drawnCards,
						{
							image: res.data.cards[0].image,
							value: res.data.cards[0].value,
							suit: res.data.cards[0].suit,
							degree: 40 - Math.floor(Math.random() * 80)
						}
					],
					remaining: res.data.remaining
				};
			});
		} catch (err) {
			console.log('axios failed retrieving card');
		}
	}

	render() {
		return (
			<div className="Deck">
				<div className="Deck-input">
					<h1>Card Dealer React Demo</h1>
					{this.state.remaining ? (
						<button onClick={this.handleClick}>Draw Card</button>
					) : (
						<h1>No more cards</h1>
					)}
				</div>

				{this.state.drawnCards.map(card => {
					const id = uuidv4();
					return <Card card={card} key={id} id={id} />;
				})}
			</div>
		);
	}
}
