import { getCookie } from '../../../../utils/cookie/cookie';
import AddUserAddresses from '../AddUserAddresses/AddUserAddresses';

const UserAddresses = () => {
    return(
        <AddUserAddresses userId={getCookie('userId')}/>
    );
};

export default UserAddresses;