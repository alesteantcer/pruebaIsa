import React, { useContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AuthContext } from "../../auth/Context";
import Swal from "sweetalert2";
const theme = createTheme();

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useContext(AuthContext);

	/* const data = {
		username,
		password,
	}; */

	const verifyUser = async (e) => {
		e.preventDefault();
		const ok = await login(username, password);
		if (!ok) {
			Swal.fire("Error", "Verifique el usuario y contraseña", "error");
		}
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
						Login
					</Typography>
					<Box component="form" onSubmit={verifyUser} sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							value={username}
							autoComplete="username"
							autoFocus
							type="text"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Contraseña"
							type="password"
							id="password"
							value={password}
							autoComplete="current-password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Login
						</Button>
						<Grid container>
							{/*<Grid item xs>
                <Link href="#" variant="body2">
                  Olvidó la contraseña?
                </Link>
              </Grid>*/}
							<Grid item>
								<Link href="signup" variant="body2">
									{"¿No tienes una cuenta? Resgistrate"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
