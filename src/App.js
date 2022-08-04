//import logo from './logo.svg';
import "./App.css";
import Counter from "./features/counter/Counter";
import Display from "./features/counter/Display";
import RecruitmentForm from "./features/counter/recruitmentForm";
import Counters from "./components/Counters";
import CountUseReducer from "./components/CountUseReducer";
import TodoUseReducer from "./components/TodoUseReducer";

function App() {
  return (
    <div className="App">
      {/* <RecruitmentForm /> */}
      {/* <CountUseReducer /> */}
      <TodoUseReducer />
      {/*      
      <Counter /> */}
      {/* <Display /> */}
    </div>
  );
}

export default App;
