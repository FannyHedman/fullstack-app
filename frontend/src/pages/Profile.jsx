import Navbar from "../components/navbar"
import Posts from "../components/Posts"
import { ProfileInfo } from '../components/profileInfo';

function Profile() {
  return (
    <div>
        <Navbar>

        </Navbar>

        <h1 className="ProfileLogo">Profile</h1>
        <ProfileInfo />

        <Posts>

        </Posts>


    </div>
  )
}

export default Profile
