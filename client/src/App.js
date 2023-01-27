import {Route, Routes} from 'react-router-dom'
import Main from './components/main';
import ViewOne from './components/ViewOne';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<ViewOne />} />
        <Route path ='/create' element={<Create />}/>

      </Routes>
    </div>
  );
}

export default App;
