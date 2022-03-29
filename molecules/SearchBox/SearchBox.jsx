import {Text, View} from "react-native";
import  {Buttons} from "../../atoms/Buttons/Button";
import { InputField } from '../../atoms/Input/Input';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addTodo} from "../../Redux/action";
import {v4 as uuid} from "uuid";

export const SearchBox=(prop)=>{
    const dispatch=useDispatch();

    const [text,setText]=useState("");
    
    const handleSubmit=()=>{

        if(text===""){
            alert("Please enter the task");
            return ;
        }


        

        const payload={
          status:false,
          title:text,
          id:uuid(),
          mark:false
        }
        dispatch(addTodo(payload));
      }

    return <View>
            <InputField placeholder={prop.placeholder} onChangeText={(text)=>setText(text)}/>
            <Buttons title={prop.title} onPress={handleSubmit}/> 
    </View>
}