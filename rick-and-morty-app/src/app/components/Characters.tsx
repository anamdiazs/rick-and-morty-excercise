"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface Character {
	id: number;
	name: string;
	image: string;
}

interface CharacterCardProps {
	character: Character;
}

const Characters = () => {
	const [characterData, setCharacterData] = useState<[]>();

	useEffect(() => {
		getCharacterData();
	}, []);

	const getCharacterData = async () => {
		try {
			const response = await axios.get("http://localhost:4000/characters");
			setCharacterData(response.data);
		} catch (error) {
			console.error("Error fetching characters", error);
		}
	};

	const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
		const { id, name, image } = character;
		return (
			<Card sx={{ width: 345 }} key={id}>
				<CardMedia sx={{ height: 250 }} image={image} title={name} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{name}
					</Typography>
				</CardContent>
			</Card>
		);
	};

	return (
		<Grid
			container
			spacing={{ xs: 2, md: 3 }}
			columns={{ xs: 4, sm: 8, md: 12 }}
		>
			{characterData?.map((character: Character) => (
				<Grid item xs={4} key={character.id}>
					<CharacterCard key={character.id} character={character} />
				</Grid>
			))}
		</Grid>
	);
};

export default Characters;
