import Navbar from "../components/navbar"
import Posts from "../components/Posts"
import { ProfileInfo } from '../components/profileInfo';

function Profile() {
  return (
    <div>
        <Navbar>

        </Navbar>

        <ProfileInfo />
        <Posts />
    </div>
  )
}

export default Profile
