import React, { useEffect, useState } from "react"
import { Pokemon } from "./Pokemon"

export const PokemonList = () => {
	const [pokes, setPokes] = useState([])

	useEffect(() => {
		const getPokes = async () => {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
			const result = await response.json()
			setPokes(result.results)
		}
		getPokes()
	}, [])

	console.log("pokes", pokes)

	return (
		<div className="pokemonCards">
			{pokes.map((a) => (
				<Pokemon name={a.name} img={a.url} key={a.id} type={a.type} />
			))}
		</div>
	)
}
