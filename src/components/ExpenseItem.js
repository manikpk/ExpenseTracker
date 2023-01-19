import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description"></div>
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.price} </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
