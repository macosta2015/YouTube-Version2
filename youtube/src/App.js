import BasicGrid from './pages/introduction'; 
import RowAndColumnSpacing from './pages/Row&Columns/Row&Column.js';
import StandardImageList from './components/images.js';
import ReadingAPI from './pages/ReadingAPI/ReadingAPI.js';

function App() {
  return (
    <div className="App">
      {/* <BasicGrid /> */}
      {/* <StandardImageList /> */}
      <RowAndColumnSpacing />
      <ReadingAPI />

    </div>
  );
}

export default App;
