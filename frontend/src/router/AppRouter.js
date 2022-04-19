import React, { useContext, useEffect } from "react";
import { AuthContext } from "../auth/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import NoAuthRouter from "./NoAuthRouter";
import PrivateRouter from "./PrivateRouter";
import YesAuthRouter from "./YesAuthRouter";
import RegisterAnimal from "../components/registerAnimal/RegisterAnimal";

export const AppRouter = () => {
	const { auth, verificationToken } = useContext(AuthContext);
	useEffect(() => {
		verificationToken();
	}, [verificationToken]);

	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route
						path="/free/*"
						element={
							<PublicRouter>
								<NoAuthRouter />
							</PublicRouter>
						}
					/>

					<Route
						path="/*"
						element={
							<PrivateRouter>
								<RegisterAnimal />
							</PrivateRouter>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
