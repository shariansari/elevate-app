import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../BottomTabs/Home/Home';
import Booking from '../BottomTabs/Booking/Booking';
import Location from '../BottomTabs/Location/Location';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Color';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Profile from '../BottomTabs/Profile/Profile';
import Screens from '../constant/Screens';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const navigation = useNavigation()
  const CartReducer = useSelector(state => state.CartReducer);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(CartReducer?.showCartBar);
  }, [CartReducer?.showCartBar]);

  console.log("CartReducer", CartReducer?.showCartBar);
  const navigateToCart = () => {
    navigation.navigate(Screens.CART);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Booking') iconName = 'calendar-outline';
            else if (route.name === 'Location') iconName = 'location-outline';
            else if (route.name === 'Profile') iconName = 'person-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.SECONDARY,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'white' },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Booking" component={Booking} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>


      {isVisible && (
        <View style={styles.bottomBanner}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-Regular', fontSize: 12 }}>Service Added to cart</Text>
            <TouchableOpacity onPress={navigateToCart}>
              <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Bold', fontSize: 13, }}>View Cart</Text>
            </TouchableOpacity>

          </View>

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBanner: {
    backgroundColor: Colors.SECONDARY,
    margin: 10,
    padding: 12,
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    zIndex: 10,
    borderRadius: 10
  },
  bannerText: {
    color: 'white',
    fontSize: 16,
  },
  hideText: {
    color: 'red',
    marginTop: 5,
  },
});

export default TabNavigation;
