import React from "react";
import Row from "react-bootstrap/esm/Row";

const ShowTasks = ({ tasks, onDelete, onToggle }) => {
	return (
		<Row className="mt-3 d-flex flex-column container col-md-9">
			{tasks.map((task) => {
				return (
					<div
						onDoubleClick={() => onToggle(task.id)}
						key={task.id}
						className={`${
							task.reminder ? "tasks border-green" : "tasks"
						} showtasks`}
					>
						<div className="text">
							<h1>{task.title}</h1>
							<p>{task.date}</p>
						</div>
						<div>
							<button
								className="btn btn-danger"
								onClick={() => onDelete(task.id)}
							>
								Delete
							</button>
						</div>
					</div>
				);
			})}
		</Row>
	);
};

export default ShowTasks;
