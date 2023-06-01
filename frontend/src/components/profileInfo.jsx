import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const InfoContainer = styled.div`
position: relative;
top: 100px;
  margin-left: 6rem;

  @media screen and (max-width: 787px) {
margin-left: 12rem;

}

@media screen and (max-width: 562px) {
margin-left: 9rem;

}

@media screen and (max-width: 474px) {
margin-left: 5rem;

}
`

const ImgHolder = styled.img`
background-image: url("../../public/img/twitter-avi-gender-balanced-figure.webp");
background-repeat: no-repeat;
background-size: contain;
margin-left: 50px;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;

  border-color: black;
  background-color: #D9D9D9;
`

const Hr = styled.hr`
  width: 300px;
`

const PlaceHolder = styled.div`
  margin-top: 3rem;
`

export const ProfileInfo = () => {
    const { id } = useParams()

    const [name, setName] = useState('')

    useEffect(() => {
      axios.get(`http://localhost:8800/accounts/${id}`)
      .then(response => {
        setName(response.data.name)
      })
      .catch(error => {
        console.error(error)
      })
    }, [id])

  return(
    <InfoContainer>
      <ImgHolder />
      <PlaceHolder>
        <p>{name}</p>
        <Hr />
      </PlaceHolder>
      <PlaceHolder>
        <p>Ålder</p>
        <Hr />
      </PlaceHolder>
      <PlaceHolder>
        <p>Intresse</p>
        <Hr />
      </PlaceHolder>
    </InfoContainer>
  )
}
