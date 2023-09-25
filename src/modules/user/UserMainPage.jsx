import { Outlet } from 'react-router-dom';
import { HEADER_NAVIGATION } from '../../constants';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const UserMainPage = () => (
    <>
       <div className='wrapper'>
           <Header navigationData={HEADER_NAVIGATION} />
           <Outlet />
           <Footer />
       </div>
    </>
);

export default UserMainPage;
