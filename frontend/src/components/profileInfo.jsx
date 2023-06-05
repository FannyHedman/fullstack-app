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

const ProfileHeader = styled.h2`
  margin-bottom: 30px;
`

// const ImgHolder = styled.img`
// background-image: url("../../public/img/twitter-avi-gender-balanced-figure.webp");
// background-repeat: no-repeat;
// background-size: contain;
// margin-left: 50px;
//   border-radius: 50%;
//   width: 10rem;
//   height: 10rem;

//   border-color: black;
//   background-color: #D9D9D9;
// `

const Hr = styled.hr`
  width: 300px;
`

const PlaceHolder = styled.div`
  margin-top: 3rem;
`

export const ProfileInfo = () => {
    const { id } = useParams()

    // const [name, setName] = useState('')
    const [accountData, setAccountData] = useState({
      name: '',
      age: 0,
      interest: ''
    })

    // useEffect(() => {
    //   axios.get(`http://localhost:8800/accounts/${id}`)
    //   .then(response => {
    //     setName(response.data.name)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
    // }, [id])

    useEffect(() => {
      axios.get(`http://localhost:8800/accounts/${id}`)
      .then(response => {
        const {name, age, interest} = response.data
        setAccountData({name, age, interest})
      }).catch(error => {
        console.error(error)
      })
    }, [id])


    // Images

    let profileImage;
    if(id === '1') {
      profileImage = '../../public/img/bild1.jpg'
    } else if (id === '2') {
      profileImage = '../../public/img/bild2.jpg'
    } else if (id === '3') {
      profileImage = '../../public/img/bild3.jpg'
    } else if (id === '4') {
      profileImage = '../../public/img/bild4.jpg'
    } else {
      profileImage = '../../public/img/twitter-avi-gender-balanced-figure.webp'
    }

  return(
    <InfoContainer>
      <ProfileHeader>Profile</ProfileHeader>
      {/* <ImgHolder /> */}
      <img src={profileImage} alt='Profile Image'/>
      <PlaceHolder>
        <h6>Name</h6>
        <p>{accountData.name}</p>
        <Hr />
      </PlaceHolder>
      <PlaceHolder>
      <h6>Age</h6>
        <p>{accountData.age}</p>
        <Hr />
      </PlaceHolder>
      <PlaceHolder>
      <h6>Interests</h6>
        <p>{accountData.interest}</p>
        <Hr />
      </PlaceHolder>
    </InfoContainer>
  )
}
