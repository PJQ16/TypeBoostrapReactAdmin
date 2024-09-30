import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLayout from './Pages/AdminLayout';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AdminLayout/>
    </>
  )
}

export default App
