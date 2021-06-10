import React, { useState } from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner'


const AddPersonForm = () => {

    const AddForm = styled.div`
      display: flex;
      flex-direction: column;
      max-width: 350px;
      padding-bottom: 1rem;
      
`
    const AddInput = styled.input`
         margin-bottom: 20px;
`
    const AddInputText = styled.input`
        max-width: 200px;
        margin-bottom: 20px;
        outline: 0;
        border-width: 0 0 1px;
        border-color: #013087;
        padding: 5px;
`
    const AddButton = styled.button`
      max-width: 100px;
      padding: 10px 25px;
      background: #04f324;
      border: none;
      border-radius: 3px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      align-self: left;
      margin-left: 4rem;
`

    const H3Add = styled.h3`
    display: flex;
    align - items: center;
`
    const SuccessAddUser = styled.p`
        padding: 12px;
        color: #25AD47;
        font-weight: bold;
        margin-right: 22%;
    `
    const ConstErrorAddUser = styled.p`
        padding: 12px;
        color: #E62727;
        font-weight: bold;
        margin-right: 22%;
`
    const ComponentContainer = styled.div`
        margin: 3rem 0 3rem 4rem; 

`

    // * ----------- STATES ---------- *
    const [isUserWellAdded, setIsUserWellAdded] = useState(false);
    const [errorWhileAddingUser, seterrorWhileAddingUser] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const addKnownImage = e => {
        e.preventDefault()
        setIsLoading(true)
        // Send it to backend -> add_known_image as a POST request
        let name = document.getElementById("name").value
        let picture = document.getElementById('pictureToSend')
        
        if (name && picture) {  // Name field and picture input can't be left empty !
            let formData = new FormData();

            formData.append("nameOfPerson", name)
            formData.append("image", picture.files[0])

            fetch('http://127.0.0.1:5000/add_known_image', {
                method: 'POST',
                body: formData,
            })
                .then(reposonse => reposonse.json())
                .then(response => {
                    console.log(response)
                    setIsUserWellAdded(true)
                    setIsLoading(false)
                })
                .catch(error => {
                    seterrorWhileAddingUser(true)
                    console.log(error);
                })
        }else if(!name){
            alert('Kullanıcı kaydederken isim (ID) kutusu boş bırakılamaz !');
        } else if(! picture ){
            alert('Kullanıcı kaydederken fotoğraf seçilmelidir !!!');
        }  
    };


    return (
        <div>
            <ComponentContainer>
                {/* <H3Add>Tanınan Kişi Ekle</H3Add> */}
                <AddForm>
                    <AddInputText id="name" name="name" placeholder='İsim' type="text" />
                    <AddInput type="file" alt="person" id='pictureToSend' name='pictureToSend' title="Seç" />
                    <AddButton className="addbtn" onClick={addKnownImage} >
                        {isLoading ? <Spinner animation="border" /> : 'Ekle'}
                    </AddButton>
                    {isUserWellAdded && <SuccessAddUser>Tanınan Kişilere Eklendi!!!</SuccessAddUser>}
                    {errorWhileAddingUser && <ConstErrorAddUser>Bir Hata Oluştu Lütfen Tekrar Deneyin!</ConstErrorAddUser>}
                </AddForm>
            </ComponentContainer>
        </div>
    );
};

export default AddPersonForm;
