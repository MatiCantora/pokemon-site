import React from "react"
import "../App.css"

export const Pokemon = ({ id, name, type, img }) => {
	return (
		<>
			<div className="cards">
				<div className="container">
					<h3>{name}</h3>
					<img className="pokeImg" src={img} alt="" />
					<p>Type: {type}</p>
					<p>#{id}</p>
				</div>
			</div>
		</>
	)
}
