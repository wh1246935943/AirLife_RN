import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableHighlight,
    Navigator,
    Image
} from 'react-native';

import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';

import HomePageStack from './pages/HomePageStack/HomePageStack';
import myServicePageStack from './pages/myServicePageStack/myServicePageStack';
import PersonalPageStack from './pages/PersonalPageStack/PersonalPageStack';


class TabBarItem extends Component {  
  
    render() {  
        return(  
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }  
                style={ { tintColor:this.props.tintColor,width:25,height:25 } }  
            />  
        )  
    }  
      
} 
const AirReactNative = TabNavigator(  
  {  
     
  
    Mine1:{  
          screen:HomePageStack,  
          navigationOptions:{
            title:'首页',  
            tabBarIcon:({focused,tintColor}) => (  
              <TabBarItem  
               tintColor={tintColor}  
                focused={focused}  
                normalImage={require('./image/ic_nor_home.png')}  
                selectedImage={require('./image/ic_press_home.png')}  
              />  
            ) 
          } 
             
    }, 

    Mine:{  
          screen:myServicePageStack,  
          navigationOptions:{
            title:'我的服务',  
            tabBarIcon:({focused,tintColor}) => (  
              <TabBarItem  
               tintColor={tintColor}  
                focused={focused}  
                normalImage={require('./image/ic_nor_service.png')}  
                selectedImage={require('./image/ic_press_service.png')}  
              />  
            ) 
          } 
             
    },

    Mine2:{  
          screen:PersonalPageStack,  
          navigationOptions:{
            title:'个人中心',  
            tabBarIcon:({focused,tintColor}) => (  
              <TabBarItem  
               tintColor={tintColor}  
                focused={focused}  
                normalImage={require('./image/ic_nor_me.png')}  
                selectedImage={require('./image/ic_press_me.png')}  
              />  
            ) 
          } 
             
    },

    

    
  },  
  
    {  
      // initialRouteName: 'Home',
      tabBarComponent:TabBarBottom,  
      tabBarPosition:'bottom',  
      swipeEnabled:false,  
      animationEnabled:false,  
      lazy:true, 
      swipeEnabled:true, 
      tabBarOptions:{  
        inactiveTintColor:'#cccccc',
        activeTintColor:'#09a9ef',  
  
        style:{backgroundColor:'#ffffff',},  
        labelStyle: {  
              fontSize: 14, // 文字大小  
              color:'#bbb'
          },  
      }  
        
    }  
  
  );
/*
import {StackNavigator} from 'react-navigation';
import MyReservation from './pages/MyReservation';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import Families from './pages/Families';
import PersonInfoPage from './pages/PersonInfoPage';
import PersonalPage from './pages/PersonalPage';
import HomePage from './pages/HomePage';
import PatientRoomPage from './pages/patient_room/patient-room';
import DoctorDetailsPage from './pages/doctor_details/doctor-details';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AirLife from './pages/AirLife/AirLife';
import AirClinic from './pages/AirClinic/AirClinic';
import ConsultationRoom from './pages/ConsultationRoom/ConsultationRoom';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import MyServers from './pages/MyServers/MyServers';
import DiseaseDescribePage from './pages/disease-describe/disease-describe';
import PaymentPage from './pages/payment/payment';


const AirReactNative = StackNavigator({
    DoctorDetails: {screen: DoctorDetailsPage},
    LoginPage: {screen: LoginPage},
    DiseaseDescribe: {screen: DiseaseDescribePage},
    PatientRoom: {screen: PatientRoomPage},
    Payment: {screen: PaymentPage},
    MyServers: {screen: MyServers},
    ForgetPassword: {screen: ForgetPassword},
    ConsultationRoom: {screen: ConsultationRoom},
    AirClinic: {screen: AirClinic},
    AirLife: {screen: AirLife},
    RegisterPage: {screen: RegisterPage},
    PersonalPage: {screen: PersonalPage},
    MyReservation: {screen: MyReservation},
    Families: {screen: Families},
    EditContact: {screen: EditContact},
    AddContact: {screen: AddContact},
    PersonInfoPage: {screen: PersonInfoPage},
    Home: {screen: HomePage},

});
*/
AppRegistry.registerComponent('AirReactNative', () => AirReactNative);
