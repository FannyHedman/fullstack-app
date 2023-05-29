import styled from 'styled-components';

const InfoContainer = styled.div`
  margin-left: 2rem;
`

const ImgHolder = styled.img`
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
  return(
    <InfoContainer>
      <ImgHolder />
      <PlaceHolder>
        <p>Namn</p>
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
