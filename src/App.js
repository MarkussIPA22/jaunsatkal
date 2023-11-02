import ToDo from './ToDo';
import { useEffect , useState } from "react"

function App(props) {

const [todo, setToDo] = useState({});
const [loading, setLoading] = useState(true);

  useEffect( () => {
    console.log("iet vai ne")
    async function getData() {
      const  response = await fetch("https://jsonplaceholder.typicode.com/todos/4")
      const data = await response.json(); 
      console.log(data)
      setToDo(data)
      setLoading(false)
    }

    getData()

}, [])
// const todo = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };

  return (
    <div className="App">
     <h1>Hello</h1>
      { loading ? <p>Lādējas...</p>: <ToDo {...todo} />}
     
    </div>
  );
}

export default App;
