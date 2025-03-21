import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import Colors from "../../constant/Color";

const CalendarPicker = ({ onDateTimeSelect }) => {
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));
  const [selectedTime, setSelectedTime] = useState("");

  // Generate the next 5 days starting from today
  const generateNextFiveDays = () => {
    return Array.from({ length: 5 }, (_, i) => {
      let date = moment().add(i, "days");
      return {
        fullDate: date.format("YYYY-MM-DD"),
        day: date.format("ddd"), // Mon, Tue, Wed
        date: date.format("D"), // 17, 18, 19
        month: date.format("MMM"), // Feb, Mar
      };
    });
  };

  const upcomingDates = generateNextFiveDays();

  // Generate time slots (e.g., every hour from 10 AM to 6 PM)
  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  return (
    <View style={{ marginVertical: 20, }}>
      <Text style={{ fontSize: 16, marginTop: 5, fontFamily: "Poppins-Bold" }}>
        Select Date
      </Text>

      <View style={{ marginTop: 15, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {upcomingDates.map((item) => (
          <TouchableOpacity
            key={item.fullDate}
            style={{
              alignItems: "center",
              paddingVertical: 12,
              paddingHorizontal: 14,
              marginVertical: 6,
              borderRadius: 15,
              borderWidth: selectedDate === item.fullDate ? 2 : 1,
              borderColor: selectedDate === item.fullDate ? Colors.SECONDARY : "#ddd",
              backgroundColor: selectedDate === item.fullDate ? Colors.SECONDARY : 'white',
            }}
            onPress={() => {
              setSelectedDate(item.fullDate);
              setSelectedTime("");
            }}
          >
            <Text style={{ color: selectedDate === item.fullDate ? 'white' : "#aaa", fontSize: 14 }}>{item.day}</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: selectedDate === item.fullDate ? 'white' : "#000" }}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ fontSize: 16, marginTop: 30, fontFamily: "Poppins-Bold" }}>
        Select Time
      </Text>

      {/* Time Picker (3-Column Grid) */}
      <View style={{ marginTop: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {timeSlots.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: "30%",
              paddingVertical: 12,
              marginVertical: 6,
              borderRadius: 15,
              borderWidth: selectedTime === item ? 2 : 1,
              borderColor: selectedTime === item ? Colors.SECONDARY : "#ddd",
              backgroundColor: selectedTime === item ? Colors.SECONDARY : "white",
              alignItems: "center",

            }}
            onPress={() => {
              setSelectedTime(item);
              onDateTimeSelect(`${selectedDate} ${item}`); 
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: selectedTime === item ? "white" : "#000" }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CalendarPicker;
