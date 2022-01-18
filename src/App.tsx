import './App.css';
import { TickingClock } from './components/mainConcepts/5_StateAndLifecycle';
import Toggle from './components/mainConcepts/6_HandlingEvents';
import HomePage from './components/mainConcepts/7_ConditionalRendering';
import ComponentAsElement from './components/mainConcepts/2_ComponentAsElement';
import Helloworld from './components/mainConcepts/1_Helloworld';
import PropsExample from './components/mainConcepts/4_Props';
import ReactElement from './components/mainConcepts/3_ReactElement';
import List from './components/mainConcepts/8_ListAndKeys';
import Forms from './components/mainConcepts/9_forms';
import Calculator from './components/mainConcepts/10_LiftingStateUp/Calculator';
import ChildrenAsProps from './components/mainConcepts/11_CompositionVsInheritance';
import FilterableProductTable from './components/mainConcepts/12_ThinkingInReact/FilterableProductTable';
import CardContainer from './uiComponents/HorizontalCards/CardContainer';

function App() {
  return (
    <div className='bg-slate-200'>
      <Helloworld />
      <CardContainer />
      <ReactElement />
      <ComponentAsElement />
      <PropsExample name='prop1' />
      <PropsExample name='prop2' />
      <TickingClock increment={1} />
      <TickingClock increment={2} />
      <Toggle />
      <HomePage isLoggedIn={false} />
      <List list={[1, 2, 3, 4]} />
      <Forms />
      <Calculator />
      <ChildrenAsProps />
      <FilterableProductTable />

    </div>
  );
}

export default App;
