import { View, Text } from 'react-native';
import { useSelector } from "react-redux";
import { Card } from "../../molecules/Card/Card";
import React from 'react'
import { FlatList } from 'react-native';

export const Result = () => {
  const marked=useSelector((state)=>state.todo).filter(e=>e.status);
  console.log(marked);
  return (
    <View>
      <Text>Result</Text>
      <FlatList data={marked} renderItem={({item})=><View>

      <Card  data={item}/>
      </View>} />
    </View>
  )
}
