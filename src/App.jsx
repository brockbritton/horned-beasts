
import './App.css'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'
import SelectedBeast from './SelectedBeast.jsx'
import BeastFilter from './BeastFilter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import beastData from "./assets/data.json"
import { useState } from 'react'

function App() {
  let [show, setShow] = useState(false);
  let [beast, setBeast] = useState(null);
  
  const showModal = obj => {
    setBeast(obj)
    setShow(true); 
  }

  const closeModal = () => {
    setShow(false);
  }

  return (
    <>
      <Header />
      <BeastFilter />
      <SelectedBeast showBool={show} onHide={closeModal} selectBeast={beast} />
      <Gallery beastData={beastData} onClick={showModal}  />
      <Footer />
    </>
  )
}

export default App
