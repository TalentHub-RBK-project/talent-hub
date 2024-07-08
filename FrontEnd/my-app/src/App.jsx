import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './component/NavBar.jsx';
import Home from './component/pages/Home.jsx';
import Footer from './component/Footer.jsx';
import SignUpRole from './component/pages/SignUpRole.jsx';
import SignUpForm from './component/pages/SignUpForm.jsx'
import Programming from './component/pages/Programming.jsx';
import Graphics from './component/pages/Graphics.jsx'
import DigitalMarketting from './component/pages/DigitalMarketting.jsx';
import Login from './component/pages/Login.jsx';
import CreateTalent from './component/pages/CreateTalent.jsx';
import axios from 'axios'
import AllTalent from './component/pages/AllTalent.jsx';
import CreateLoder from './Loader/createTalentLoader.jsx';
import Apply from './component/pages/Apply.jsx';
import CreateSucc from './popups/createSucc.jsx';
import Offers from './component/pages/FreelancerOfferes.jsx'
import SearchTalent from './component/pages/SearchTalent.jsx';
import UpdateTalent from './component/pages/Update.jsx';

import { jwtDecode } from "jwt-decode";
import OneTalent from './component/pages/OneTalent.jsx';

function App() {
  const [SignUprole,setSignUpRole]=useState('')
  const [talents, setTalents] = useState([])
  const [refetsch, setRefetsch] = useState(false)
  const [user,setUser]=useState({})
  const [oneTalent, setOneTalent] = useState({})
  const [selectedTalentId, setSelectedTalentId] = useState(null);
  const [OffersNumber,setOffersNumber]=useState(0)
  const [SearchVal,setSearchVal]=useState('')
  
  
 console.log(user);

  const getTalents = () => {
    axios.get('http://127.0.0.1:5000/api/talents/getAll').then((response) => {
      setTalents(response.data)
    })
      .catch((error) => {
        console.log(error)
      })
  }

 

  const deleteTalent = (id) => {
    axios.delete(`http://127.0.0.1:5000/api/talents/${id}`).then((response) => {
      console.log('Talent deleted successfully', response.data)
      setRefetsch(!refetsch)
    }).catch((error) => { console.log(error) })
  }



  
  useEffect(() => {
    getTalents()
  }, [refetsch])

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (token && isAuthenticated) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken)
    }
  }, []);

  const updateTalent = (id, body) => {
    axios.put(`http://127.0.0.1:5000/api/talents/${id}`, body).then((response) => {
      console.log('Talent updated successfully', response.data)
      setRefetsch(!refetsch)
    }).catch((error) => { console.log(error) })
  }

  const onChange = () => {
    setRefetsch(!refetsch)
  }
  const onChangeOneTalent = (talent) => {
    setOneTalent(talent)
  }

  return (
    <Router>
      <NavBar user={user} setUser={setUser} offers={OffersNumber} searchVal={setSearchVal} />
      <Routes>
        <Route path="/" element={<Home talent={talents} oneTalent={setSelectedTalentId} setOneTalent={setOneTalent} />} />
        <Route path="/sign-up-role" element={<SignUpRole setSignUpRole={setSignUpRole} role={SignUprole} />} />
        <Route path="/sign-up-form" element={<SignUpForm role={SignUprole} />} />
        <Route path="/sign-up-role" element={<SignUpRole setSignUpRole={setSignUpRole} role={SignUprole} />} />
        <Route path="/login" element={<Login user={setUser} />} />
        <Route path="/programming" element={<Programming talents={talents} setOneTalent={setOneTalent} oneTalent={setSelectedTalentId} />} />
        <Route path="/graphics" element={<Graphics talents={talents} setOneTalent={setOneTalent} oneTalent={setSelectedTalentId} />} />
        <Route path="/digital-marketting" element={<DigitalMarketting setOneTalent={setOneTalent} oneTalent={setSelectedTalentId} talents={talents} />} />
        <Route path="/addtalent" element={<CreateTalent  user={user}  change={onChange}/>}></Route>
        <Route path="/alltalent" element={<AllTalent talents={talents} change={onChangeOneTalent} delete={deleteTalent} talentid={setSelectedTalentId} user={user} />}></Route>
        <Route path="/onetalent" element={<OneTalent talentid={selectedTalentId} user={user} />}></Route>
        <Route path="/create-loader" element={<CreateLoder />} />
        <Route path="/apply-talent" element={<Apply oneTalent={oneTalent} user={user} />} />
        <Route path="/create-succ" element={<CreateSucc />} />
        <Route path="/offers" element={<Offers offersNumber={setOffersNumber} user={user} />} />
        <Route path="/search-talent" element={<SearchTalent talents={talents} setOneTalent={setOneTalent} oneTalent={setSelectedTalentId} searchVal={SearchVal} />} />
        <Route path="/updatetalent" element={<UpdateTalent talent={oneTalent} update={updateTalent} />}></Route>

      </Routes>
      <Footer />
    </Router>
  )
}

export default App