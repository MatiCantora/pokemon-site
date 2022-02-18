import React, { useEffect, useState } from "react"
import { list, Pokemons } from "./Pokemons"

const PokemonsList = () => {
	const [poke, setPoke] = useState([])

	useEffect(() => {
		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(list)
			}, 2000)
		})
		promesa.then((resultado) => {
			console.log("resultado", resultado)
			setPoke(resultado)
		})
	})

	return (
		<div className="pokemonCards">
			{poke.map((list) => (
				<Pokemons bgcolor={list.bgc} name={list.name} img={list.pictureUrl} key={list.id} type={list.type} />
			))}
		</div>
	)
}

export default PokemonsList
