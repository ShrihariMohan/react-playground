import './App.css';
import ComponentAsElement from './components/basics/ComponentAsElement';
import Helloworld from './components/basics/Helloworld';
import PropsExample from './components/basics/Props';
import ReactElement from './components/basics/ReactElement';

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
