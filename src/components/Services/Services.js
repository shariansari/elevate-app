// import React, { useEffect } from 'react';
// import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
// import { salonistHitApi } from '../../Api/ApiHIt';
// import { domainId, services } from '../../constant/Constant';

// function Services() {
//   const DATA = [
//     { id: '1', title: 'Haircuts', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27' },
//     { id: '2', title: 'Make up', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80%27' },
//     { id: '3', title: 'Manicure', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80%27' },
//     { id: '4', title: 'Padicure', image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80%27' },
//     { id: '1', title: 'Shaving', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27' },
//   ];

//   const Item = ({ title, image }) => (
//     <View style={{flexDirection:"column",alignItems:'center',gap:10}}>
//       <Image source={{ uri: image }} style={{height:80,width:80,borderRadius:20,marginHorizontal:10}} />
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// useEffect(()=>{
//   serviceData()
// },[])


// const serviceData = () => {
//   let json = {
//       domainId: domainId
//   };

//   salonistHitApi(json, services).then((res) => {
//       console.log("res", res);
//   });
// };


//   return (
//     <View style={{ marginTop: 20 }}>
//       {/* <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Item title={item.title} image={item.image} />}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       /> */}
//       <Text>Shariqw</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 10,
//     marginHorizontal: 10,
//     borderRadius: 10,
//     width: 120,
//     alignItems: 'center',
//   },
//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   title: {
//     fontFamily:'Poppins-Regular'
    
//   },
// });

// export default Services;



import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { salonistHitApi } from '../../Api/ApiHIt';
import { domainId, services } from '../../constant/Constant';

function Services() {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    fetchServiceData();
  }, []);

  const fetchServiceData = async () => {
    try {
      const json = { domainId: domainId };
      const res = await salonistHitApi(json, services);

      if (res?.status === "success" && Array.isArray(res?.services)) {
        // Map service names to corresponding images
        const imageMap = {
          "Hair Service": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
          "Facial Service": "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=2036&q=80",
          "Default": "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        };

        const formattedData = res.services
          .filter(item => item?.Plan?.id && item?.Plan?.name) // Ensure valid data
          .map((item) => ({
            id: String(item.Plan.id), // Ensure ID is a string
            title: item.Plan.name,
            image: imageMap[item.Plan.name] || imageMap["Default"]
          }));

        setServiceList(formattedData);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const Item = ({ title, image }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
  loadingText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
});

export default Services;

