import RunLog from './components/RunLog';
import Header from './layout/Header';

export default function App() {
  return (
    <main className="h-screen bg-gradient-to-b from-gray-500 to-gray-800">
      <Header />
      <RunLog />
    </main>
  )
}