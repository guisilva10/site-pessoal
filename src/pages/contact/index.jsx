import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://br.linkedin.com/in/guilherme-lopes-24a816232" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/profile.php?id=100004694073708" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/_._bigg" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="guisilva.070104@gmail.com" 
        />
      </Content>
    </Container>
  )
}