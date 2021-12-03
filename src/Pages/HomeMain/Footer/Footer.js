import { Button, Container, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaDiscord, FaFacebookF } from "react-icons/fa";

const Footer = () => {
	return (
		<Container sx={{ minWidth: "100%", py: 5 }}>
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
								cursor:
									"url(https://ani.cursors-4u.net/games/gam-16/gam1545.cur), auto",
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
								cursor:
									"url(https://ani.cursors-4u.net/games/gam-16/gam1545.cur), auto",
							},
						}}>
						<FaDiscord style={{ color: "white" }} size={25} />
					</IconButton>
				</Box>
				<Typography variant='h5' sx={{ fontWeight: "bold", color: "white" }}>
					FEMO HIDDEN GAMERS
				</Typography>
				<Typography variant='body' sx={{ fontWeight: "bold", color: "white" }}>
					&copy; 2021 All Right Reserved
				</Typography>
			</Box>
			<Typography variant='body2' sx={{ fontWeight: "bold", color: "white" }}>
				Developer:
				<Button
					sx={{
						color: "#0E5DCA",
						fontWeight: "bold",
						cursor:
							"url(https://cur.cursors-4u.net/toons/too-7/too666.cur), auto",
					}}
					onClick={() =>
						window.open("https://sunywebdev.netlify.app/", "_blank")
					}>
					sunywebdev
				</Button>
			</Typography>
		</Container>
	);
};

export default Footer;
