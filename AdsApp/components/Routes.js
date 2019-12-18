import Ads from './Ads';
import Post from './Post';
import Edit from './Edit';

import {createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


const NavStack =createStackNavigator({
    Ads:{
        screen:Ads,
        navigationOptions:() => ({
            headerTitle:"Advertisements"
        })
    },
    Edit:{
        screen:Edit,
        navigationOptions:() => ({
            headerTitle:"Edit"
        })
    },
},{
    headerLayoutPreset:"center"
})

const BottomTab = createBottomTabNavigator({
    Advertisements:{
        screen:NavStack
    },
    Post:{
        screen:Post
    }
})

export default Routes =createAppContainer(BottomTab)