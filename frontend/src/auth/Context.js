import React, { createContext, useState, useCallback } from "react";
import { notoken, yesToken } from "../helpers/crud_fetch";

export const AuthContext = createContext();

const initial = {
	isLogin: false,

	checking: true,
};

export const Context = ({ children }) => {
	const [auth, setAuth] = useState(initial);

	const login = async (username, password) => {
		const resp = await notoken(
			"users/auth/verification-user",
			{ username, password },
			"POST"
		);

		if (resp.ok) {
			localStorage.setItem("token", resp.token);
			const { user } = resp;
			setAuth({
				isLogin: true,

				checking: false,
			});
			console.log("Autenticado");
		}
		return resp.ok;
	};

	const sign_up = async (name, lastname, email, username, password) => {
		//const data = { name, lastname, email, username, password };
		const resp = await notoken(
			"users/auth/create",
			{ name, lastname, email, username, password },
			"POST"
		);

		if (resp.ok) {
			localStorage.setItem("token", resp.token);
			const { user } = resp;
			setAuth({
				isLogin: true,

				checking: false,
			});
			return true;
		}
		return resp.msg;
	};

	const logout = () => {
		localStorage.removeItem("token");
		setAuth({
			isLogin: false,

			checking: false,
		});
	};

	const verificationToken = useCallback(async () => {
		const token = localStorage.getItem("token");

		if (!token) {
			setAuth({
				isLogin: false,

				checking: false,
			});
			return false;
		}
		const resp = await yesToken("users/auth/token");
		if (resp.ok) {
			localStorage.setItem("token", resp.token);
			const { user } = resp;
			setAuth({
				isLogin: true,

				checking: false,
			});
			return true;
		} else {
			setAuth({
				isLogin: false,

				checking: false,
			});

			return false;
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{ auth, login, sign_up, logout, verificationToken }}
		>
			{children}
		</AuthContext.Provider>
	);
};
