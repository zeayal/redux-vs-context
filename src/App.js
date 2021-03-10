import "./App.css";
import Articles from "./containers/Articles";
import ArticleContextProvider from './context/ArticleContextProvider';

function App() {
  return (
    <div className="app">
      <ArticleContextProvider>
        <Articles />
      </ArticleContextProvider>
    </div>
  );
}

export default App;
