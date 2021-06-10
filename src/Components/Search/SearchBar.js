import React, { useState } from 'react';
import styled from 'styled-components';
import reloadImg from "../../Assets/reload.png"

// * --------- COMPONENTS --------- *
import SearchResult from './SearchResults'

const SearchBar = () => {

    // * ---------- STATES ---------- *
    const [attendanceResult, setAttendanceResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState();
    

    // * ---------- STYLE ---------- *
    const SearchSection = styled.section`
        display: flex;
        flex-direction: column;
        margin: 40px 10px;
        background-color: #ffffff;
        padding: 20px;
        width: 60vw;
        border: 1px solid black;
        border-radius: 1rem;
        h2 {
            margin-top : 0;
            margin-bottom: 1rem;
            font-size: 45px;
            line-height: 1;
            font-weight: normal;
            color: black;
            text-align: center;
        }
    `
    const SearchContainer = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const AnswerDiv = styled.div`
        min-width: 90%;
    `
    const SearchInput = styled.input`
        max-width: 200px;
        margin-bottom: 20px;
        outline: 0;
        border-width: 0 0 1px;
        border-color: #013087;
        padding: 5px;
    `
     const SearchButton = styled.button`
        max-width: 100px;
        padding: 10px 20px;
        background: #04f324;
        border: none;
        border-radius: 3px;
        color: white;
        font-weight: bold;
        margin:0;
        cursor: pointer;
        margin-bottom: 2rem;
    `
    const FormDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 90%;
    `
    const ReloadTag = styled.img`
        height : 40px;
        cursor: pointer;
        float: right;

    `
    const ErrorMessage = styled.p`
        font-size: 2rem;
        font-weight: bold;
        color: red;

    `

    const searchAttendance = () => {
        
        const name = document.getElementById('searchName').value.toLowerCase()
        if(name){
            fetch(`http://127.0.0.1:5000/get_attendance/${name}`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if(response){
                   setAttendanceResult(response)
                } 
                if(response.length === 0) {
                  setErrorMessage(true)
                }
            }).catch(err=> console.error(err))
        }
        else{
           setAttendanceResult([])
        }
    }

    const reload = ()=>{
        setAttendanceResult([]);
        setErrorMessage(false);
    }


    return (
        <>
            <SearchSection>
                <h2>Katılım Kaydı Ara <ReloadTag onClick={reload} src={reloadImg} alt="reload" title="Yenile" /></h2>
                <SearchContainer>
                    <FormDiv>
                        <SearchInput name='searchName' id='searchName' placeholder='isim' type="text"/>
                        <SearchButton onClick={ searchAttendance } id='searchBtn'>
                            Ara
                        </SearchButton>
                    </FormDiv>
                    <AnswerDiv>
                        {/* Show user's data if user found */}
                        { ( attendanceResult  ) ? attendanceResult.map(ar=> <SearchResult result={ar} />)  : console.log(errorMessage)}
                        {/* Show an error if user is not found */}
                        { errorMessage ? <ErrorMessage>Kayıt Bulunamadı!</ErrorMessage> : null }
                    </AnswerDiv>
                </SearchContainer>
            </SearchSection>
        </>
    );
};

export default SearchBar;
