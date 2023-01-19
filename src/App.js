import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      date: new Date(2023, 0, 16),
      price: 5000,
    },
    {
      title: 'House Rent',
      date: new Date(2023, 2, 6),
      price: 7000,
    },
    {
      title: 'Wifi Bill',
      date: new Date(2023, 4, 20),
      price: 400,
    },
    {
      title: 'Electricity Bill',
      date: new Date(2023, 1, 14),
      price: 900,
    },
  ];
  return (
    <div>
      <h2>
        <center>
          <strong>Expense Tracker</strong>
        </center>
      </h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
