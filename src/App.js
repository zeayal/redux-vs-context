import "./App.css";
import Articles from "./containers/Articles";
import ArticleProvider from './context/ArticleProvider';

function App() {
  return (
    <div className="app">
      <ArticleProvider>
        <Articles />
      </ArticleProvider>
    </div>
  );
}

export default App;
