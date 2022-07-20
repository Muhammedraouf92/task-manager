import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { AiOutlinePlusSquare } from "react-icons/ai";
const AddTask = ({ onAdd, setShow, show }) => {
	const [text, setText] = useState("");
	const [date, setDate] = useState("");
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		const id = Math.floor(Math.random() * 100) + 1;
		if (!text) {
			alert("please insert text");
			return;
		}
		onAdd({ id, title: text, date, reminder });
		setDate("");
		setText("");
		setReminder(false);
	};

	return (
		<Container className="mt-4">
			<Row>
				<Col className="col-md-9">
					<Card>
						<Card.Header
							className="fs-3 d-flex justify-content-between"
							onClick={() => setShow(!show)}
						>
							<p>Add Appointment</p>
							<span>
								<AiOutlinePlusSquare />
							</span>
						</Card.Header>
						{show && (
							<Card.Body>
								<Form onSubmit={onSubmit}>
									<Form.Group className="mb-4">
										<Form.Label>Task Title</Form.Label>
										<Form.Control
											type="text"
											value={text}
											placeholder="Enter Task Title"
											onChange={(e) => setText(e.target.value)}
										/>
									</Form.Group>

									<Form.Group className="mb-4">
										<Form.Label>Task date</Form.Label>
										<Form.Control
											type="date"
											value={date}
											placeholder="Enter Task Date"
											onChange={(e) => setDate(e.target.value)}
										/>
									</Form.Group>
									<div className="reminder">
										<label>set Reminder</label>
										<input
											type="checkbox"
											name="checkbox"
											value={reminder}
											onChange={(e) => setReminder(e.currentTarget.checked)}
										/>
									</div>

									<Button type="submit">submit</Button>
								</Form>
							</Card.Body>
						)}
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default AddTask;
