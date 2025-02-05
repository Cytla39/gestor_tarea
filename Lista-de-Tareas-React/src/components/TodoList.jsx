import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({
	todos,
	handleNewTodo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
	onShowEditModal
}) => {
	return (
		<ul>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleNewTodo={handleNewTodo}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
					onShowEditModal={onShowEditModal}
				/>
			))}
		</ul>
	);
};
