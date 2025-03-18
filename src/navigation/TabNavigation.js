import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../BottomTabs/Home/Home';
import Profile from '../BottomTabs/Profile/Profile';
import Booking from '../BottomTabs/Booking/Booking';
import Location from '../BottomTabs/Location/Location';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const [isVisible, setIsVisible] = useState(true)

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
          tabBarActiveTintColor: 'tomato',
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
          <Text style={styles.bannerText}>This is a Notification Banner</Text>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <Text style={styles.hideText}>Hide</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBanner: {
    backgroundColor: 'lightblue',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    zIndex: 10,
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
