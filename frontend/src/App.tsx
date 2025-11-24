import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { HomePage } from './HomePage';

function App() {
  const renderContentAboveFooter = () => <h1>Footer content here</h1>;
  return (
    <div className="App">
      <Header></Header>
      <HomePage />
      <Footer renderContentAboveFooter={renderContentAboveFooter}>
        This is your footer
      </Footer>
    </div>
  );
}

export default App;
