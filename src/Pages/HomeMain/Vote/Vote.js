import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { CardMedia, Container, Paper, Typography } from "@mui/material";
import image1 from "../../../images/1.png";
import image2 from "../../../images/2.png";
import image3 from "../../../images/3.png";
import { Box } from "@mui/system";
import { FaCheck } from "react-icons/fa";

const Vote = () => {
	const [done1, setDone1] = useState("Vote");
	const [done2, setDone2] = useState("Vote");
	const [done3, setDone3] = useState("Vote");
	return (
		<Container sx={{ py: 9, mx: "auto" }}>
			<Grid container spacing={3} alignItems='center' justifyContent='center'>
				<Grid item md={3} sm={6} xs={12}>
					<Paper
						onClick={() => {
							window.open(
								"http://topminecraftservers.org/vote/23646",
								"_blank",
							);
							setDone1("Done");
						}}
						elevation={5}
						sx={{
							borderRadius: 3,
							backgroundColor: "transparent",
							"&:hover": {
								boxShadow:
									"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
								cursor:
									"url(https://ani.cursors-4u.net/games/gam-16/gam1545.cur), auto",
							},
						}}>
						<Box sx={{ position: "relative" }}>
							<CardMedia
								component='img'
								sx={{
									width: "100%",
									height: "100%",
									borderRadius: 3,
								}}
								image={image1}
								alt=''
							/>
							<Box
								sx={{
									position: "absolute",
									left: "50%",
									top: "50%",
									transform: "translate(-50%, -50%)",
									color: "white",
									textShadow: "4px 4px 7px rgba(0,0,0,0.68)",
								}}>
								{done1 === "Done" && <FaCheck size={55} />}
								<Typography variant='h2' sx={{ fontWeight: "bold" }}>
									{done1}
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={3} sm={6} xs={12}>
					<Paper
						onClick={() => {
							window.open(
								"https://minecraft-mp.com/server/297225/vote/",
								"_blank",
							);
							setDone2("Done");
						}}
						elevation={5}
						sx={{
							borderRadius: 3,
							backgroundColor: "transparent",
							cursor: "pointer",
							"&:hover": {
								boxShadow:
									"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
								cursor:
									"url(https://ani.cursors-4u.net/games/gam-16/gam1545.cur), auto",
							},
						}}>
						<Box sx={{ position: "relative" }}>
							<CardMedia
								component='img'
								sx={{
									width: "100%",
									height: "100%",
									borderRadius: 3,
								}}
								image={image2}
								alt=''
							/>
							<Box
								sx={{
									position: "absolute",
									left: "50%",
									top: "50%",
									transform: "translate(-50%, -50%)",
									color: "white",
									textShadow: "4px 4px 7px rgba(0,0,0,0.68)",
								}}>
								{done2 === "Done" && <FaCheck size={55} />}
								<Typography variant='h2' sx={{ fontWeight: "bold" }}>
									{done2}
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={3} sm={6} xs={12}>
					<Paper
						onClick={() => {
							window.open(
								"https://topg.org/minecraft-servers/server-637891",
								"_blank",
							);
							setDone3("Done");
						}}
						elevation={5}
						sx={{
							borderRadius: 3,
							backgroundColor: "transparent",
							cursor: "pointer",
							"&:hover": {
								boxShadow:
									"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
								cursor:
									"url(https://ani.cursors-4u.net/games/gam-16/gam1545.cur), auto",
							},
						}}>
						<Box sx={{ position: "relative" }}>
							<CardMedia
								component='img'
								sx={{
									width: "100%",
									height: "100%",
									borderRadius: 3,
								}}
								image={image3}
								alt=''
							/>
							<Box
								sx={{
									position: "absolute",
									left: "50%",
									top: "50%",
									transform: "translate(-50%, -50%)",
									color: "white",
									textShadow: "4px 4px 7px rgba(0,0,0,0.68)",
								}}>
								{done3 === "Done" && <FaCheck size={55} />}
								<Typography variant='h2' sx={{ fontWeight: "bold" }}>
									{done3}
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Vote;
