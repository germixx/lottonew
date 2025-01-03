import Header from '../../components/Profile/Header';
import Sidebar from '../../components/Profile/Sidebar';

export const metadata = {
  title: "Lottery Profile",
  description: "Generated by create next app",
};

const ProfileLayout = ({children}) => {
  return (
    <div>
        <div>
          <Header />
          <Sidebar />
          
        </div>
      {children}
    </div>
  )
}
 
export default ProfileLayout;