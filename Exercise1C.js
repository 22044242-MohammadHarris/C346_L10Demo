import React,{useEffect, useState} from 'react';
import { FlatList, StatusBar, Text, TextInput, View} from 'react-native';

let originalData = [];

const Exercise1C = () => {
  const [mydata, setMydata] = useState([]);
  const [search, setSearch] = useState("");

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
      if(originalData.length < 1){
        setMydata(data);
        originalData = data;
      }
    })
  },[])


  const filterData = (text) => {
    if(text != ""){
      let myFilteredData = originalData.filter(item=>(
        item.title.includes(text)
      ))
      setMydata(myFilteredData);
    }
    else{
      setMydata(originalData);
    }
  } 



  const renderItem = ({item, index}) => {
    return (
    <View>

    <Text style={{borderWidth:1}}>{item.id}. {item.title}</Text>
    </View>
    );
  };

  return (
    <View>
      <StatusBar/>
      <Text>Search:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(value)=>filterData(value)}/>
      <FlatList data={mydata} renderItem={renderItem} />
    </View>
  );
}

export default Exercise1C;
