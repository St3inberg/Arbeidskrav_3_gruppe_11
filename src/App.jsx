import './App.css';
import './styles/styles.scss';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import profilkort from './components/profilkort.jsx';

function App() {
  return (
    <>
      
      <Layout elements={<profilkort/>}>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/category/:slug" element={<profilkort resources={profilkort}/>} />
        <Route path="/category/:slug" element={<resources resources={profilkort}/>} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
