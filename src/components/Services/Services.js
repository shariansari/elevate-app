import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { salonistHitApi } from "../../Api/ApiHIt";
import { domainId, services } from "../../constant/Constant";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedService } from "../../redux/Actions/ServiceAction";
import Screens from "../../constant/Screens";

function Services() {
  const ServiceReducer = useSelector(state => state.ServiceReducer);
  const dispatch = useDispatch()


  console.log("ServiceReducer",ServiceReducer);
  

  const navigation = useNavigation()
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    fetchServiceData();
  }, []);

  const fetchServiceData = async () => {
    try {
      const json = { domainId: domainId };
      const res = await salonistHitApi(json, services);

      if (res?.status === "success" && Array.isArray(res?.services)) {
        const imageMap = {
          "Hair Service":
            "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
          "Facial Service":
            "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=2036&q=80",
          Default:
            "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        };

        const formattedData = res.services
          .filter((item) => item?.Plan?.id && item?.Plan?.name)
          .map((item) => ({
            id: String(item.Plan.id),
            title: item.Plan.name,
            image: imageMap[item.Plan.name] || imageMap["Default"],
          }));

        setServiceList(formattedData);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handlePress = (title) =>{
    console.log("title",title);
    dispatch(setSelectedService(title))
    navigation?.navigate(Screens.CHILDSERVICES)
  }

  const Item = ({ title, image }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={()=>handlePress(title)}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 16, marginTop: 10 }}>Services</Text>
      <View style={styles.container}>
        {serviceList.length > 0 ? (
          <FlatList
            data={serviceList}
            renderItem={({ item }) => <Item title={item.title} image={item.image} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.loadingText}>Loading services...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 10,
  
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    fontSize: 12,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
});

export default Services;
