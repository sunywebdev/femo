import { Container, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaDiscord, FaFacebookF } from "react-icons/fa";

const Footer = () => {
	return (
		<Container sx={{ mt: 7, minWidth: "100%", py: 5 }}>
			<Box sx={{ mx: "auto" }}>
				<Box sx={{ my: 1 }}>
					<IconButton
						onClick={() =>
							window.open("https://www.facebook.com/FemoHG", "_blank")
						}
						component='span'
						sx={{
							backgroundColor: "#0674E7",
							mx: 1,
							"&:hover": {
								backgroundColor: "#0674E7",
							},
						}}>
						<FaFacebookF style={{ color: "white" }} size={25} />
					</IconButton>
					<IconButton
						onClick={() => window.open("https://discord.gg/Y5dGhmQq", "_blank")}
						component='span'
						sx={{
							backgroundColor: "#5662F6",
							mx: 1,
							"&:hover": {
								backgroundColor: "#5662F6",
							},
						}}>
						<FaDiscord style={{ color: "white" }} size={25} />
					</IconButton>
				</Box>
				<Typography variant='h5' sx={{ fontWeight: "bold", color: "white" }}>
					FEMO HIDDEN GAMERS
				</Typography>
				<Typography variant='body' sx={{ fontWeight: "bold", color: "white" }}>
					@2021 All Roght Reserved
				</Typography>
			</Box>
		</Container>
	);
};

export default Footer;
