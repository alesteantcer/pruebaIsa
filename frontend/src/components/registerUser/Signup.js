import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import FormRegister from "./FormRegister";

const theme = createTheme();

export default function Signup() {
	const [boxAccount, setBoxAccount] = useState("block");
	const [formRegisterAnimal, setformRegisterAnimal] = useState("none");

	const onClickBtnEmail = () => {
		setBoxAccount("none");
		setformRegisterAnimal("block");
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Registrate Gratis
					</Typography>
					<Box sx={{ display: boxAccount }}>
						<Button
							type="button"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, marginTop: "10px" }}
						>
							Google <GoogleIcon sx={{ marginLeft: "5px" }} />
						</Button>
						<Button
							type="button"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, marginTop: "10px" }}
						>
							Facebook <FacebookIcon sx={{ marginLeft: "5px" }} />
						</Button>
						<Button
							type="button"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, marginTop: "10px" }}
							onClick={() => {
								onClickBtnEmail();
							}}
						>
							email <EmailIcon sx={{ marginLeft: "5px" }} />
						</Button>
						<Grid container>
							<Grid item>
								<Link href="login" variant="body2">
									{"¿tienes una cuenta? Login"}
								</Link>
							</Grid>
						</Grid>
					</Box>
					<FormRegister display={formRegisterAnimal} />
				</Box>
			</Container>
		</ThemeProvider>
	);
}
