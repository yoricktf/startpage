import './App.css';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Time from './Components/Time/Time';
import News from './Components/News/News';

function App() {
  return (
    <div className="App">
      <div Id="tempIndicator">
      </div>
      <Time />
      {/* weather is imported through the news widget */}
      <News />
      <Bookmarks />
    </div>
  );
}

export default App;
