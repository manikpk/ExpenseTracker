import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div>
      <div className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          price={props.expenses[0].price}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          date={props.expenses[1].date}
          price={props.expenses[1].price}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          date={props.expenses[2].date}
          price={props.expenses[2].price}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          date={props.expenses[3].date}
          price={props.expenses[3].price}
        />
      </div>
    </div>
  );
}

export default Expenses;
