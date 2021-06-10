import React, { useEffect } from 'react'
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css';

        /****** COMPONENTS*********/ 
import Video from "./Components/VideoFeed"
import Admin from "./Components/AdminBlock/Admin"
import SearchBar from "./Components/Search/SearchBar"
import AttendanceTable from "./Components/AttendanceTable"
import Footer from "./Components/Footer"


const Home =()=>{

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

    return (
        <div className="App">  
            <div id="top">
                <Navbar className="nvbr"  expand="lg">
                <Nav.Link href="#home"><FontAwesomeIcon icon={faVideo} size="2x" color="white" /></Nav.Link>
                    <Navbar.Brand href="#home">
                        <h1 className="App-title">TAM</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" activeKey={window.location.pathname}>    
                        </Nav>         
                        <Button variant="outline-light" size="lg" href="/login" >Çıkış</Button> 
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="main">
                <div className="main-title">
                <h1 ><span className="highlight">TANIDIK</span>   YÜZ     <span className="highlight">ARAMA</span>  MOTORU</h1>
                </div>
                <Video />
                <Admin />
                <AttendanceTable />
                <div data-aos="fade-up">
                    <SearchBar  />
                </div>
            </div>
            <div data-aos="fade-left">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
