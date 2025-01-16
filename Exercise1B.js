import React,{useEffect, useState} from 'react';
import { FlatList, StatusBar, Text, TextInput, View} from 'react-native';

const Exercise1B = () => {
  const [mydata, setMydata] = useState([]);

  // const retrieveData = async() => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  //   const data = await response.json();

  //   if(data){
  //     setMydata(data);
  //   }
  // }

  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/albums';

    const response = fetch(url)
    .then((response)=>{
      return response.json()
    })
    
    .then((data)=>{
      setMydata(data)
    })
  },[])



  const renderItem = ({item, index}) => {
    return (
    <View>
    <Text style={{borderWidth:1}}>{item.title}</Text>
    </View>
    );
  };

  return (
    <View>
      <StatusBar/>
      <Text>Search:</Text>
      <TextInput style={{borderWidth:1}}/>
      <FlatList data={mydata} renderItem={renderItem} />
    </View>
  );
}

export default Exercise1B;
