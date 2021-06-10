import React, { useState } from 'react';
import styled from 'styled-components'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import reloadImg from "../../Assets/reload.png"
import AddPerson from "./AddPerson"
import Search from "./Search"


const Admin = () => {
    
    const AdminBlockSection = styled.section`
        display: flex;
        flex-direction: column;
        margin: 40px 10px;    
        background-color: white;  
        padding: 20px;
        border: 1px solid black;
        border-radius: 1rem;
        width: 30vw;
        h2 {
            margin-top : 0;
            margin-bottom:1rem;
            font-size: 45px;
            line-height: 1;
    
            color: black;
            border-bottom: 2px black solid;
            padding-bottom: 2px;
            text-align: center;
        }
`
    const ComponentsContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
`
    const ReloadTag = styled.img`
        height : 40px;
        cursor: pointer;
        float: right;

`
    const Admin = styled.span`
        text-align: center;
        padding: 0.5rem 0.5rem;
        border-radius: 2rem;
        margin-left:2rem;
`

    // Reload the compenent by changing an inconsquential state
    const [reload, setReload] = useState([]);
    const reloadComp = () => {
        setReload([]);
        setSearch(false);
        setAdd(true);
    };

    //// Dropdown ////
    const [add,setAdd] = useState(true);
    const [search,setSearch] = useState(false);

    const adding = ()=>{
        setAdd(true);
        setSearch(false);
    };
    const searching =()=>{
        setAdd(false);
        setSearch(true);
    };

    return (
        <AdminBlockSection>
            {reload}
            <h2><Admin>Yönetici</Admin><ReloadTag onClick={reloadComp} src={reloadImg} alt="reload" title="Yenile" /></h2>
            {/* <hr /> */}
            <ComponentsContainer>
            <DropdownButton id="dropdown-basic-button" className="justify-content-center" title={add ? 'Tanınan Kişi Ekle' : 'Tanınmayan Kişi Ara'} size="lg">
                <Dropdown.Item onClick={adding}>Tanınan Kişi Ekle</Dropdown.Item>
                <Dropdown.Item onClick={searching}>Tanınmayan Kişi Ara</Dropdown.Item>
            </DropdownButton>
                {/*Add known person form*/}
                {add && <AddPerson /> }         
                {/*search button*/}
                {search && <Search />} 
            </ComponentsContainer>
        </AdminBlockSection>
    );
};


export default Admin;
