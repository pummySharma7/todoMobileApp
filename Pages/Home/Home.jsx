import { Button, FlatList, StyleSheet, View } from 'react-native';
import { Card } from '../../molecules/Card/Card';
import { SearchBox } from '../../molecules/SearchBox/SearchBox';
import {useSelector} from "react-redux";
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Home=({navigation})=>{
  let todo=useSelector((state)=>state.todo)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.gap} onPress={()=>navigation.navigate("Result")}>
        <Button title="Go to Result page"/>
      </TouchableOpacity>
      <SearchBox placeholder="Enter your task" title="Submit"/>
      <FlatList data={todo} renderItem={({item})=><View>

      <Card  data={item}/>
      </View>} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gap:{
    marginBottom:4
  }
});

