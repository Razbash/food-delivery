import { useEffect, useState } from 'react';

import BlockTitle from '../../components/BlockTitle/BlockTitle';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { fetchUser } from '../../store/User/userActions';
import { UserIcon, GeoIcon, CardIcon, ShieldIcon } from '../../ui/icons';
import { getCookie } from '../../utils/cookie/cookie';
import LayoutPage from '../Layouts/LayoutPage';

import './account.scss';
import { Notification } from '../../components/Notification';

import Payments from './components/Payments/Payments';
import UserAddresses from './components/UserAddresses/UserAddresses';
import UserPersonalInformation from './components/UserPersonalInformation/UserPersonalInformation';
import UserSecurity from './components/UserSecurity/UserSecurity';

const AccountPage = () => {
    const [currentTabId, setCurrentTabId] = useState<Number>(0);
    const {user, error} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const userId = getCookie('userId');
        dispatch(fetchUser('', userId));

        // eslint-disable-next-line
    }, []);

    const tabs = [
        {
            title: 'Account',
            description: 'Personal information',
            icon: <UserIcon/>,
        },
        {
            title: 'Address',
            description: 'Shippings addresses',
            icon: <GeoIcon/>,
        },
        {
            title: 'Payment method',
            description: 'Connected credit cards',
            icon: <CardIcon/>,
        },
        {
            title: 'Security',
            description: 'Password, 2FA',
            icon: <ShieldIcon/>,
        },
    ];

    const onTabClickHandler = (id: number) => {
        setCurrentTabId(id);
    };

    return(
        <LayoutPage>
            <div className="user-profile">
                <div className="user-profile__navigation">
                    <BlockTitle text="Settings"/>

                    <div className="user-profile__tabs">
                        {tabs.map((element, index) => {
                            const {title, description, icon} = element;
                            const tabMeta = currentTabId === index ? 'user-profile__tab-item user-profile__tab-item--active' : 'user-profile__tab-item';

                            return(
                                <div className={tabMeta}
                                    key={index}
                                    tabIndex={1}
                                    onClick={() => onTabClickHandler(index)}
                                >
                                    <div className="user-profile__tab-icon-wrapper">
                                        {icon}
                                    </div>
                                    <div className="user-profile__tab-info">
                                        <span className="user-profile__tab-title">
                                            {title}
                                        </span>
                                        <span className="user-profile__tab-subtitle">
                                            {description}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="user-profile__content">
                    {currentTabId === 0 && user ? <UserPersonalInformation userData={user}/> : null}
                    {currentTabId === 1 && user ? <UserAddresses/> : null}
                    {currentTabId === 2 && user ? <Payments/> : null}
                    {currentTabId === 3 && user ? <UserSecurity/> : null}
                </div>
            </div>

            <Notification/>
        </LayoutPage>
    );
};

export default AccountPage;