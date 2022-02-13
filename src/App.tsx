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
import CardContainer from './HorizontalCards/CardContainer';
import { ThemeContext } from './components/advancedGuides/3_Context/3_Context';
import ComponentContainingContext from './components/advancedGuides/3_Context/3_ComponentContainingContext';
import ErrorBoundaries from './components/advancedGuides/4_ErrorBoundary';
import CreatingRef from './components/advancedGuides/5_ForwardingRefs/UsingReference';
import loggingProps from './components/advancedGuides/5_ForwardingRefs/LogginProps';
import { ThatReturnsFragments, ThatReturnsShortSyntaxFragments } from './components/advancedGuides/6_Fragments';
import CommentList from './components/advancedGuides/7_HigherOrderComponents/7_CommentList';
import { WordAdder } from 'components/advancedGuides/10_Optimizing_performance/10_InDepthExample';
import Example from 'components/advancedGuides/9_JSXinDepts';

function App() {
  return (
    <ThemeContext.Provider value='dark'>
      <div className='bg-slate-200 '>
        <Helloworld />
        <CardContainer />
        <div className='px-2'>
          <PropsExample name='React Playground' />
          <ErrorBoundaries>
            <Calculator />
          </ErrorBoundaries>
          <FilterableProductTable />
          <HomePage isLoggedIn={false} />
          <ReactElement />
          <ComponentAsElement />
          <TickingClock increment={1} />
          <TickingClock increment={2} />
          <Toggle />
          <List list={[1, 2, 3, 4]} />
          <ChildrenAsProps />
          <Forms />
          <ComponentContainingContext />
          <CreatingRef />
          <ThatReturnsFragments />
          <ThatReturnsShortSyntaxFragments />
          <CommentList />
          <Example />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
