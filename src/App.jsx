import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';


import './App.css';

const App = () => {
  return (
    <main>
      
      <div className="fixed w-screen h-screen flex justify-center p-120 md:p-160 px-4 pointer-events-none bg-gradient-to-r from-black to-red-900">
      </div>

      <div className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
        <NavBar/>
        <Home/>
        <About/>
        <Team/>
      </div>

    </main>
  )
}

export default App

