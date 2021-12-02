import { Container, Typography } from "@mui/material";
import React from "react";
import femocraft from "../../../images/femocraft.png";

const Banner = () => {
	return (
		<Container sx={{ py: 5, color: "white" }}>
			<img src={femocraft} alt='' style={{ width: "100%" }} />
			<Typography variant='h2' sx={{ fontWeight: "bold", my: 2 }}>
				FEMO HIDDEN GAMERS
			</Typography>
			<Typography variant='body' sx={{ fontWeight: "bold" }}>
				FEMO HIDDEN GAMERS is an inclusive place for everyone...We are a
				growing, active community where you can be yourself. Make new friends,
				play games together like Minecraft, VALORANT, Apex Legends, and more.
				watch movies, and have fun together in a non-toxic, friendly
				environment. We have a game bot, free game news, game key giveaway,
				Music channel, Anime Waifu channel, and much more. Come to hang out and
				chat with our wonderful community.
			</Typography>
		</Container>
	);
};

export default Banner;
