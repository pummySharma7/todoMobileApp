import { TextInput,StyleSheet } from "react-native"

export const InputField=({placeholder,onChangeText})=>{
    return <TextInput  style={styles.input} onChangeText={onChangeText} placeholder={placeholder}/>
}

const styles=StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#777',
        padding:8,
        width:200
      }
})