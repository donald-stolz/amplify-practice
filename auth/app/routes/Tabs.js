import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Tabs = createBottomTabNavigator({
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
});

export default createAppContainer(Tabs);
