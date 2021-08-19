import {StyleSheet} from "react-native";
import { colors } from "../../utils/colors";
const styles=StyleSheet.create({

  chatView:{
    flex:1,
    backgroundColor:'white',
  },
  textStyle:{
    fontSize:25,
    color:colors.rgb_7807d0,
    alignSelf:'center'
  },
  flatStyle:{
    marginHorizontal: 10

  },
  lastView:{
    flexDirection:'row',
    marginHorizontal:15,
    justifyContent:'space-between',
    alignItems:'center'

  },
  chatTextInputStyle:{
    borderBottomWidth:1,
    marginLeft:15,
    marginVertical:15,
    padding:5,
    flex:1,
  //  width:295,
    color:'black'
  },
  buttonStyle:{
    borderWidth:0.5,
    fontWeight:'bold',
    fontSize:20,
    borderRadius:5,
  }


})
export default styles
