import React, { useState } from "react";
import Icon from "../icon/icon.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Card, CardBody, Container } from "reactstrap";
let arr = new Array(9).fill("");
const Tic = () => {
	let [winner_message, setWinnerMessage] = useState("");
	let [whose_turn, setWhoseTurn] = useState(true);

	//play again
	function playAgain() {
		arr.fill("");
		setWinnerMessage("");
		setWhoseTurn(true);
	}

	//check who there is a winner
	function checkWinner() {
		//check rows
		if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != "") {
			setWinnerMessage(arr[0] + " is the winner");
		} else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != "") {
			setWinnerMessage(arr[3] + " is the winner");
		} else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != "") {
			setWinnerMessage(arr[6] + " is the winner");
		} else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != "") {
			setWinnerMessage(arr[0] + " is the winner");
		} else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != "") {
			setWinnerMessage(arr[1] + " is the winner");
		} else if (arr[2] == arr[5] && arr[8] == arr[5] && arr[2] != "") {
			setWinnerMessage(arr[2] + " is the winner");
		} else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != "") {
			setWinnerMessage(arr[0] + " is the winner");
		} else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != "") {
			setWinnerMessage(arr[2] + " is the winner");
		} else if (arr.indexOf("") == -1) {
			setWinnerMessage("Draw");
		}
	}
	//playersMove
	function playersMove(index) {
		if (winner_message !== "") {
			return toast.error("Game is over already!");
		} else if (arr[index] !== "") {
			return toast.error("This cell is already ocuupied");
		} else if (arr[index] === "") {
			arr[index] = whose_turn ? "Cross" : "Circle";
			setWhoseTurn(!whose_turn);
		}
		checkWinner();
	}

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					{winner_message ? (
						<div className="text-center">
							<h1 className="text-uppercase text-center">
								{winner_message}
							</h1>
							<Button color="Success" onClick={playAgain}>
								PLAY AGAIN
							</Button>
						</div>
					) : (
						<h1 className="text-center text-warning">
							{whose_turn ? "Cross" : "Circle"}'s turn
						</h1>

						// <div className="grid ">
						// 	<div className="grid-item-1">
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(0)}
						// 		></Button>
						// 	</div>
						// 	<div className="grid-item-2">
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(1)}
						// 		></Button>
						// 	</div>
						// 	<div className="grid-item-3">
						// 		{" "}
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(2)}
						// 		></Button>
						// 	</div>
						// 	<div className="grid-item-4">
						// 		{" "}
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(3)}
						// 		></Button>
						// 	</div>
						// 	<div className="grid-item-5">
						// 		{" "}
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(4)}
						// 		></Button>
						// 	</div>
						// 	<div className="grid-item-6">
						// 		{" "}
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(5)}
						// 		></Button>
						// 	</div>
						// 	<div className="grid-item-7">
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(6)}
						// 		></Button>
						// 	</div>
						// 	<div className="grid-item-8">
						// 		{" "}
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(7)}
						// 		></Button>
						// 	</div>
						// 	<div className="grid-item-9">
						// 		{" "}
						// 		<Button
						// 			color="white"
						// 			// onClick={playersMove(8)}
						// 		></Button>
						// 	</div>
						// </div>
					)}

					<div className="grid">
						{arr.map((value, index) => (
							<Card onClick={() => playersMove(index)}>
								<CardBody className="box">
									<Icon play_icon={value} />
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Tic;
