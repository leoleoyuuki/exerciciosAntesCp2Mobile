import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Header from '../../components/Header';
import Carrinho from '../screens/Carrinho';
import { Ionicons } from '@expo/vector-icons';

const {Screen, Navigator} = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Navigator >
            <Screen
                name='Home'
                component={Home}
                options={
                    {
                        drawerIcon: ({color, size}) => (
                            <Ionicons name="home" size={size} color={color} />
                        )
                    }
                }
            />
            <Screen
                name='Carrinho'
                component={Carrinho}
                options={
                    {
                        drawerIcon: ({color, size}) => (
                            <Ionicons name="log-in" size={size} color={color} />
                        )
                    }
                }
            />
            
        </Navigator>
    )
}