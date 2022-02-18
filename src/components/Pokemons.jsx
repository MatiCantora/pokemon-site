import React from "react"
import "../App.css"

export const list = [
	{
		id: "1",
		name: "Charmander",
		pictureUrl: "https://img.pokemondb.net/sprites/x-y/normal/charmander.png",
		type: "Fire",
		bgc: "red",
	},
	{
		id: "2",
		name: "Bulbasaur",
		pictureUrl: "https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png",
		type: "Grass",
		bgc: "green",
	},
	{
		id: "3",
		name: "Squirtle",
		pictureUrl: "https://img.pokemondb.net/sprites/x-y/normal/squirtle.png",
		type: "Water",
		bgcolor: "blue",
	},
]

export const Pokemons = ({ id, name, type, img, bgc }) => {
	return (
		<>
			<div className="cards" style={{ backgroundColor: bgc }}>
				<div className="container">
					<h3>{name}</h3>
					<img className="pokeImg" src={img} alt="" />
					<p>Type: {type}</p>
				</div>
			</div>
		</>
	)
}
