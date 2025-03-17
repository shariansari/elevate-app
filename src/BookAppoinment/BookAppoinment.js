import React from 'react'
import { Text, View } from 'react-native'
import CalendarPicker from '../components/CalendarPicker/CalendarPicker';

function BookAppoinment() {
    const handleDateSelect = (date) => {
        console.log("Selected Date:", date);
      }
    return (
        <View style={{ padding: 20, backgroundColor: 'white' }}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20 }}>Book Appointment</Text>
            <View>
            <CalendarPicker onDateSelect={handleDateSelect} />
            </View>
        </View>
    )
}

export default BookAppoinment
