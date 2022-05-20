import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SignOut } from "./signout";

export const NavBar = () => {
	const { store } = useContext(Context);
	const history = useHistory();

	const handleLogOut = () => {
		sessionStorage.clear();
		history.push("/");
		location.reload();
	};

	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">
					<i className="fas fa-cocktail" />
				</Navbar.Brand>

				<Nav className="justify-content-center" activeKey="/home">
					{!store.activeUser ? (

						<Nav.Item className="loginTab pr-3">
							<Nav.Link href="/login">Log In</Nav.Link>
						</Nav.Item>


					) : (



						<Nav.Item>
							<Nav.Link onClick={() => handleLogOut()}>Sign Out</Nav.Link>
						</Nav.Item>

					)}
				</Nav>
			</Container>
		</Navbar>
	);
};
