import React from "react";
import Grid from "@mui/material/Grid";
import { CardMedia, Container, Paper, Typography } from "@mui/material";
import image1 from "../../../images/1.png";
import image2 from "../../../images/2.png";
import image3 from "../../../images/3.png";
import { Box } from "@mui/system";
import { useTimer } from "react-timer-hook";

const Vote = () => {
	const time = new Date();
	time.setSeconds(time.getSeconds() + 600);
	const { seconds, minutes, hours, days, restart } = useTimer({
		time,
		onExpire: () => console.warn("onExpire called"),
	});
	return (
		<Container sx={{ py: 9 }}>
			<Box sx={{ color: "white" }}>
				<Typography variant='h5' sx={{ fontWeight: "bold" }}>
					Time To Vote Again In
				</Typography>
				<Typography variant='h2' sx={{ fontWeight: "bold", mb: 3 }}>
					<span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
					<span>{seconds}</span>
				</Typography>
			</Box>
			<Grid container spacing={2}>
				<Grid item md={4} sm={6} xs={12}>
					<Paper
						onClick={() => {
							const time = new Date();
							time.setSeconds(time.getSeconds() + 86400);
							restart(time);
							window.open("https://discord.gg/Y5dGhmQq", "_blank");
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
								sx={{ width: "100%", height: "100%", borderRadius: 3 }}
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
								}}>
								<Typography variant='h2' sx={{ fontWeight: "bold" }}>
									VOTE
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={4} sm={6} xs={12}>
					<Paper
						onClick={() => {
							const time = new Date();
							time.setSeconds(time.getSeconds() + 86400);
							restart(time);
							window.open("https://discord.gg/Y5dGhmQq", "_blank");
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
								sx={{ width: "100%", height: "100%", borderRadius: 3 }}
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
								}}>
								<Typography variant='h2' sx={{ fontWeight: "bold" }}>
									VOTE
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={4} sm={6} xs={12}>
					<Paper
						onClick={() => {
							const time = new Date();
							time.setSeconds(time.getSeconds() + 86400);
							restart(time);
							window.open("https://discord.gg/Y5dGhmQq", "_blank");
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
								sx={{ width: "100%", height: "100%", borderRadius: 3 }}
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
								}}>
								<Typography variant='h2' sx={{ fontWeight: "bold" }}>
									VOTE
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
