import React, {useRef, useState} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useAuth} from './AuthContext'
import Footer from '../Components/Footer'
import '../App.css'

export default function Login() {

    const LoginBlock = styled.div`
        display: flex;
        flex-direction: column;
        margin: 7% 25% 12% 25%;    

    `
    const BtnSpan = styled.span`
        margin: 0 45%;  
    `

    const Heading = styled.h1`
        text-align: center;
        padding-top: 1%;
    `
    const FooterBlock = styled.div`
        text-align: center;
        
    `
    

    const emailRef = useRef()
    const passwordRef = useRef()
    
    const { login } = useAuth()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
       
        try{
            // setError('')
            setLoading(true)
           await login(emailRef.current.value, passwordRef.current.value)
            history.push("/home") 
        } catch{       
            setError(true)
    
        }
        setLoading(false) 
    }

    return (
        <>
            <Heading className="main-title-login"><span className="highlight">TANIDIK</span>   YÜZ     <span className="highlight">ARAMA</span>  MOTORU</Heading>
            <LoginBlock>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4" >Giriş Yap</h2>
                        
                        {error && <Alert varient = "danger" className="text-center font-weight-bold h5 text-danger">
                            Lütfen Tekrar Deneyin !!!</Alert>  }
                        <Form onSubmit = {handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>E-Posta:</Form.Label>
                                <Form.Control type="email" ref = {emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Şifre:</Form.Label>
                                <Form.Control type="password" ref = {passwordRef} required />
                            </Form.Group>
                            <BtnSpan>
                                <Button disabled = {loading} className ="w-10" type="submit" size="lg"> 
                                    Giriş
                                </Button>
                            </BtnSpan>
                        </Form>
                    </Card.Body>
                </Card>
            </LoginBlock>
            <FooterBlock>
                <Footer />
            </FooterBlock>
        </>
    )
}
