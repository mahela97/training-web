import DiaryCard from './Components/DiaryCard';
import './App.css'
import DiaryHome from './Pages/DiaryHome';

function App() {
  return (
    <div className="App">
      <DiaryCard title="Reasons Why Learning" subtitle="Noah" description="English is the most" bgColor="#b3e9fe"/>
      <DiaryHome/>
    </div>
  );
}

export default App;
