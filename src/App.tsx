import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';

const MOCK_DATA = [
  {
    "id": 1,
    "merchant": "AWS",
    "amount": 1260,
    "description": "Hosting for hobby project",
    "date": "2022-05-24T12:00:00.000Z",
    "category": "training",
    "status": "draft"
  },
  {
    "id": 2,
    "merchant": "Waterstones",
    "amount": 999,
    "description": "Programming book",
    "date": "2022-05-22T12:00:00.000Z",
    "category": "training",
    "status": "draft"
  },
  {
    "id": 3,
    "merchant": "BA",
    "amount": 434.22,
    "description": "Flight",
    "date": "2022-05-04T12:00:00.000Z",
    "category": "travel",
    "status": "draft"
  },
  {
    "id": 4,
    "merchant": "Wasabi",
    "amount": 7.25,
    "description": "Meal for at engineering conference",
    "date": "2022-05-04T12:00:00.000Z",
    "category": "meals",
    "status": "draft"
  }
]

function App() {
  return (
    <ExpenseList expenses={MOCK_DATA} />
    // <div id="template-text">
    //   <h1>React Starter Template - TypeScript</h1>
    //   <p>
    //     For JavaScript please use{" "}
    //     <a href="https://github.com/ruairidhflint/react-template">this</a>{" "}
    //     template
    //   </p>
    // </div>
  );
}

export default App;
