import './App.css';
import ComponentAsElement from './components/mainConcepts/ComponentAsElement';
import Helloworld from './components/mainConcepts/Helloworld';
import PropsExample from './components/mainConcepts/Props';
import ReactElement from './components/mainConcepts/ReactElement';

function App() {
  return (
    <>
      <Helloworld />
      <ReactElement />
      <ComponentAsElement />
      <PropsExample name='prop1' />
      <PropsExample name='prop2' />
    </>
  );
}

export default App;
