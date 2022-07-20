import ShowTasks from "./ShowTasks";
import { Data } from "./Data";
import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";

function App() {
	const [tasks, setTasks] = useState([]);
	const [show, setShow] = useState(false);
	const onAdd = (task) => {
		setTasks([...tasks, task]);
	};
	const onDelete = (product) => {
		setTasks(tasks.filter((task) => product !== task.id));
	};

	useEffect(() => {
		setTasks(Data);
	}, []);
	const onToggle = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};
	return (
		<div className="container">
			<div>
				<div
					md={8}
					className="mb-1
				
				
				"
				>
					<h1>Task manager</h1>
				</div>
				<div>
					<AddTask
						tasks={tasks}
						setTasks={setTasks}
						onAdd={onAdd}
						show={show}
						setShow={setShow}
					/>
				</div>
				<div>
					{tasks.length > 0 ? (
						<ShowTasks
							tasks={tasks}
							setTasks={setTasks}
							onDelete={onDelete}
							onToggle={onToggle}
						/>
					) : (
						"there is no tasks to show"
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
