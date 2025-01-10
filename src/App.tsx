import Sidebar from './components/Sidebar/Sidebar';
import { Block } from './components/UI/Block';
import './styles/main.scss';

const App = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="mainBlock">
        Main block
        <Block>Content-block</Block>
      </div>
    </div>
  );
};

export default App;
