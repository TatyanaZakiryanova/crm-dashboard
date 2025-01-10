import './styles/main.scss';

import Sidebar from './components/Sidebar/Sidebar';
import { Block } from './components/UI/Block';
import { SIDEBAR_CATEGORIES } from './mocks/mocks';

const App = () => {
  return (
    <div className="layout">
      <Sidebar categories={SIDEBAR_CATEGORIES} />
      <div className="mainBlock">
        Main block
        <Block>Content-block</Block>
      </div>
    </div>
  );
};

export default App;
