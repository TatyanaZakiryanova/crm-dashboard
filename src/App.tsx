import Sidebar from './components/Sidebar/Sidebar';
import './styles/main.scss';

const App = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <h1 className="mainBlock">Main block</h1>
      </div>
    </>
  );
};

export default App;
