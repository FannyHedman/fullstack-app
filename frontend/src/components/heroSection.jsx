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
      <Img src={heroimage} alt="Couple in love"/>
<HeaderContainer><HeroSectionHeader>GitTogether</HeroSectionHeader></HeaderContainer>
      <HeroSectionContent>
      <HeroSectionText>Let's merge your hearts</HeroSectionText>
      <HeroSectionButton onClick={handleScroll}>COMMIT</HeroSectionButton></HeroSectionContent>
    </HeroSectionContainer></>
  )
}

const HeroSectionContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
`

const HeroSectionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroSectionHeader = styled.h1`
  color: #ffffff;

  /* Mobile */
   @media (max-width: 767px) {
     font-size: 1.2rem;
}
`;

const HeroSectionText = styled.h2`
  color: #ffffff;
  margin-bottom: 30px;

  /* Mobile */
  @media (max-width: 767px) {
     font-size: 1rem;
}
`;

const HeroSectionButton = styled.button`
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 1.2rem;
  letter-spacing: 0.055em;
  /* background-image: linear-gradient(to right, #dccfbd 0%, #e4bdaf 51%, #dccfbd 100%);
  color: #2D1F1F; */
  border-radius: 10px;
  border-color: #dccfbd;
  background-color: #e7d2d2f3;
  color: black;
  text-decoration: none;

  /* Mobile */
  @media (max-width: 767px) {
     font-size: 1rem;
}
`;
