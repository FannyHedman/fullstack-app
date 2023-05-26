import React from 'react'
import heroimage from '/img/heroimage.jpg'
import styled from 'styled-components'

export const HeroSection = () => {

  const handleScroll = () => {
    window.scrollTo({
      top:800,
      behavior: 'smooth'
    })

  }
  return (
    <>
    <HeroSectionContainer>
      <HeroSectionHeader>GitTogether</HeroSectionHeader>
      <Img src={heroimage} alt="Couple in love"/>
      <HeroSectionText>LOVE WILL ALWAYS EXIST WHEN YOU LOVE YOURSELF</HeroSectionText>
      <HeroSectionButton onClick={handleScroll}>START DATING</HeroSectionButton>
    </HeroSectionContainer></>
  )
}

const HeroSectionContainer = styled.div`
    position: relative;
    text-align: center;
`
const Img = styled.img`

  /* Mobile */
  @media (max-width: 767px) {
    width: 100%;
  }

  /* iPad */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const HeroSectionHeader = styled.h1`
  color: #ffffff;
  position: absolute;
     top: 5%;
     left: 10%;
     transform: translate(-50%, -50%);
`

const HeroSectionText = styled.h2`
color: #ffffff;
  position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
`

const HeroSectionButton = styled.button`
position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    font-size: 1.2rem;
    background-color: #ffffff;
    color: #000000;
    border-radius: 5px;
    border-color: #ffffff;
    text-decoration: none;
`
