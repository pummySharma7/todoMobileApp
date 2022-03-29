import { Button, FlatList, StyleSheet, View } from 'react-native';
import { Card } from '../../molecules/Card/Card';
import { SearchBox } from '../../molecules/SearchBox/SearchBox';
import {useSelector} from "react-redux";


export const Home=()=>{
  let todo=useSelector((state)=>state.todo)
  return (
    <View style={styles.container}>
      <SearchBox placeholder="Enter your task" title="Submit"/>
      <FlatList data={todo} renderItem={({item})=><View>

      <Card  data={item}/>
      <Button title="Move"/>
      </View>} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gap:{
    
  }

});

