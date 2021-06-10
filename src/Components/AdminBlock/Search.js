import React, { useState } from 'react'
import styled from 'styled-components'
import SearchModal from "./SearchModal"
import Spinner from 'react-bootstrap/Spinner'


const SearchPersonForm = () => {

    const AddForm = styled.div`
      display: flex;
      flex-direction: column;
      max-width: 350px;
`
    const AddInput = styled.input`
         margin-bottom: 20px;
`
 
    const SearchButton = styled.button`
      max-width: 100px;
      padding: 10px 25px;
      background: #e70b1d;
      border: none;
      border-radius: 3px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      align-self: left;
      margin-left: 4rem;
`

    const H3 = styled.h3`
    display: flex;
    align - items: center;
    padding-top: 5px;
`
    const ComponentContainer = styled.div`
     margin: 5rem 0 3rem 4rem; 

`


    // * ----------- STATES ---------- *
    const [isUserFound, setIsUserFound] = useState(false);
    const [answerList, setAnswerList] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    const searchPhoto = e => {

        e.preventDefault()
        setIsLoading(true);  

        let picture = document.getElementById("pictureToSearch");

        let formData = new FormData();
        formData.append("image", picture.files[0])

        fetch('http://127.0.0.1:5000/search_photo', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response) {
                    setAnswerList(response)
                    setIsUserFound(true)
                }
                else setIsUserFound(false)         
            })
            .catch(error =>{
                setIsUserFound(false);
                console.error(error);
            })
    }


    return (
        <div>
            <ComponentContainer>
                {/* <H3>Tanınmayan Kişi Ara</H3> */}
                <AddForm>
                    <AddInput type="file" alt="UnknownPerson" id="pictureToSearch" name="pictureToSearch" />
                    { (!isUserFound) && <SearchButton onClick={searchPhoto}>
                        {isLoading ?  <Spinner animation="border" /> : 'Ara'}</SearchButton>}
                    {isUserFound && <SearchModal answer={ answerList } />}
                </AddForm>
            </ComponentContainer>
        </div>
                
    );
};

export default SearchPersonForm;