import { useSelector } from 'react-redux';
import { Sidebar } from '../Navbars';

const DashboardPage = () => {

    const reactUser = useSelector((state) => state.auth.user);
    let user = Boolean(reactUser) ? reactUser : JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <Sidebar user={user}/>
        </>
    )
}

export default DashboardPage;