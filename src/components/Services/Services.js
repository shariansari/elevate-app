import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

function Services() {
  const DATA = [
    { id: '1', title: 'Haircuts', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27' },
    { id: '2', title: 'Make up', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80%27' },
    { id: '3', title: 'Manicure', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80%27' },
    { id: '4', title: 'Padicure', image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80%27' },
    { id: '1', title: 'Shaving', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27' },
  ];

  const Item = ({ title, image }) => (
    <View style={{flexDirection:"column",alignItems:'center',gap:10}}>
      <Image source={{ uri: image }} style={{height:80,width:80,borderRadius:20,marginHorizontal:10}} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} image={item.image} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily:'Poppins-Regular'
    
  },
});

export default Services;
