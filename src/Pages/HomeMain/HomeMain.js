import { Grid } from "@mui/material";
import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Vote from "./Vote/Vote";

const HomeMain = () => {
	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: "100vh" }}>
			<Banner />
			<Vote />
			<Footer />
		</Grid>
	);
};

export default HomeMain;
