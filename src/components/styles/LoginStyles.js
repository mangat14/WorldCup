import {StyleSheet} from "react-native";
import { colors } from "../../utils/colors";
const styles=StyleSheet.create({
  mainView:{
    backgroundColor:colors.rgb_adb1b1,
    flex:1
  },
  login:{
    paddingTop:50,
    alignSelf:'center',
    fontSize:25,
    fontWeight:'bold',
    color:colors.rgb_7807d0,
  },
  checkView:{
    flexDirection:'row',
    marginVertical:55,
    //alignSelf: 'center',
    justifyContent:'space-around'
  },
  checkInner:{
    flexDirection:'row',
    alignItems:'center'
  },
  checkText:{
    fontWeight: 'bold',
    fontSize:15,
  },
  input: {
    borderBottomWidth: 0.5, padding: 10,
    marginHorizontal: 15, borderRadius: 5, marginVertical: 5,
  },
  inputText:{
    marginHorizontal: 15,
  },
  button: {
    fontSize: 20,
    borderRadius: 20,
    borderColor: "black",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: colors.rgb_7807d0,
    marginBottom: 25,
  },
  Text1:{
 flexDirection: 'row',
    margin: 10,
  textAlign: 'center'
  },
  Text2:{
    fontFamily: 'Times New Roman',
    fontSize: 18
  },
  Text3:{
    fontFamily: 'Times New Roman',
    fontSize: 18,
    color:colors.rgb_7807d0,
    paddingRight: 10
  },
})

export default styles
