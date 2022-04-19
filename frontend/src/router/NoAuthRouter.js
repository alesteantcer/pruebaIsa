import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../components/registerUser/Login";
import Signup from "../components/registerUser/Signup";
import IndexViewAnimal from "../components/viewAnimal/index.viewAnimal";

export default function NoAuthRouter() {
	return (
		<>
			<Routes>
				<Route exact path="login" element={<Login />} />
				<Route exact path="signup" element={<Signup />} />
				<Route exact path="view-animal" element={<IndexViewAnimal />} />
				<Route path="*" element={<Navigate to="/free/view-animal" />} />
			</Routes>
		</>
	);
}
