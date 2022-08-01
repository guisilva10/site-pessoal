import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Guilherme Silva</Name>
        <Function>Web Developer</Function>
        <Intro>Graduado em Sistemas de Informação, 
          tenho experiência em desenvolvimento Web
          (React, Asp, JS entre outros).
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="../Imagens/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}