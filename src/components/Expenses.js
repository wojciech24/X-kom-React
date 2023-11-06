import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

function Expenses(props) {
    return (
    <Card className="expenses">
      {props.items.map((element)=>
      <ExpenseItem 
      title = {element.title}
      img = {element.img}
      amount = {element.amount}
      opis1 = {element.opis1}
      />
      )}
    </Card>
    );
}

export default Expenses;