import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [formIsVisible, setFormVisibilitu] = useState(false);

	const onCancelClick = () => {
		setFormVisibilitu(false);
	};
	const onShowForm = () => {
		setFormVisibilitu(true);
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setFormVisibilitu(false);
	};

	return (
		<div className="new-expense">
			{!formIsVisible && (
				<button onClick={onShowForm}>Add New Expense</button>
			)}
			{formIsVisible && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={onCancelClick}
				/>
			)}
		</div>
	);
};

export default NewExpense;
