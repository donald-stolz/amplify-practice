import { TabNavigator } from 'react-navigation';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Tabs = TabNavigator({
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
});

export default Tabs;
