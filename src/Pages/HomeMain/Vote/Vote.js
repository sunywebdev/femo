import React from "react";
import Grid from "@mui/material/Grid";
import { CardMedia, Container, Paper, Typography } from "@mui/material";
import image1 from "../../../images/1.png";
import image2 from "../../../images/2.png";
import image3 from "../../../images/3.png";
import { Box } from "@mui/system";

const Vote = () => {
	return (
		<Container sx={{}}>
			<Grid container spacing={2}>
				<Grid item md={4} sm={6} xs={12}>
					<Paper elevation={5} sx={{ borderRadius: 3 }}>
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
					<Paper elevation={5} sx={{ borderRadius: 3 }}>
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
					<Paper elevation={5} sx={{ borderRadius: 3 }}>
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
