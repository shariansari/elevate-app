import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import CalendarPicker from "../components/CalendarPicker/CalendarPicker";
import AppButton from "../components/AppButton/AppButton";
import { useNavigation } from "@react-navigation/native";

const specialists = [
  { id: "1", name: "Dr. John Doe", specialty: "Cardiologist", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" },
  { id: "2", name: "Dr. Sarah Lee", specialty: "Dermatologist", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" },
  { id: "3", name: "Dr. James", specialty: "Orthopedic", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" },
  { id: "4", name: "Dr. Emily", specialty: "Neurologist", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" },
];

function BookAppoinment() {
  const navigation = useNavigation(); 
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  const handleDateTimeSelect = (dateTime) => {
    console.log("Selected Date & Time:", dateTime);
  };

  const handlePress = () => {
   navigation.navigate("BOOKINGFINALIZED")
  };

  return (
    <ScrollView>
      <View style={{ padding: 20, backgroundColor: "white", flex: 1 }}>
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20 }}>Book Appointment</Text>

        {/* Calendar Picker */}
        <CalendarPicker onDateTimeSelect={handleDateTimeSelect} />

        {/* Select Specialist */}
        <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold", marginTop: 20 }}>Select Specialist</Text>

        <View style={{ marginTop: 20 }}>
          <FlatList
            data={specialists}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedSpecialist(item)}
                style={{
                  marginRight: 15,
                  alignItems: "center",
                  padding: 10,
                  backgroundColor: selectedSpecialist?.id === item.id ? "#D1E7DD" : "#F8F8F8",
                  borderRadius: 20,
                  width: 120,
                  paddingVertical: 20,
                }}
              >
                <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 10, marginBottom: 5 }} />
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", marginTop: 3 }}>{item.name}</Text>
                <Text style={{ fontSize: 12, color: "#666" }}>{item.specialty}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Buttons */}
        <View style={{ flexDirection: "row", marginVertical: 30, justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <AppButton text={"Cancel"} bg={"white"} color={"black"} onPress={() => navigation.goBack()} />
          </View>
          <View style={{ width: "48%" }}>
            <AppButton text={"Continue"} icon={"chevron-right"} onPress={handlePress} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default BookAppoinment;
