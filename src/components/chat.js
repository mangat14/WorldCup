import React from "react";
import { TextInput, TouchableOpacity, Text, View, FlatList } from "react-native";
import styles from "./styles/chatStyles";
import { io } from "socket.io-client";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { BASE_URL, Server_URL } from "../constants";
import { getLoginDataFail, getLoginDataSuccess } from "../actions/HomeAction";

export default class chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked:false,
      arr: ["hello", "guys", "how", "are", "you"],
      textChat: "",
      markers : [
        {
          latitude: 30.1378,
          longitude: 75.7982,
          title: 'Preet Nagar',
          subtitle: '1234 Foo Drive'
        },
        {
          latitude: 30.1234551,
          longitude: 75.7941641,
          title: 'Preet Nagar',
          subtitle: '1234 Foo Drive'
        },
      ],
    };
    this.socket=io(Server_URL);
    this.socket.emit('channel1','hi server');
    this.socket.on('channel2', (data) => {
      console.log('Data recieved from server', data);
    });

  }
  getPlaces(text){

    fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+text+'&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDM9w_sb9jNY4m4TM7AuilRE59NXzvO8Hw', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

    })
      .then((response) => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);

      })
      .then(([statusCode,data])=> {
        console.log('stattusCode-----',statusCode+'--data---',data)
      })
      .catch((error) => {
      })

  }

  render() {
    return (

      <View style={styles.chatView}>
        <Text style={styles.textStyle}>ChatBox</Text>

        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 30.1306,
              longitude: 75.8014,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            {this.state.markers.map((marker,index)=>{
              return  <Marker
                onPress={e => {
                  this.setState({isClicked:true})
                }}
                pinColor={'green'}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={"s ss s "}
                description={"desc"}
              >

              </Marker>
            })}
          </MapView>


        </View>

          <FlatList
            data={this.state.arr}
            renderItem={({ item, index }) =>
              <View>
                <Text>{item}</Text>
              </View>
            }
            style={styles.flatStyle}
            keyExtractor={(item, index) => index.toString()}
          />

        <View style={styles.lastView}>
          <TextInput
            value={this.state.textChat}
            placeholder={'Enter chat'}
            placeholderTextColor={'red'}
            onChangeText={text => {
              this.getPlaces(text)
              this.setState({ textChat: text });
            }}
            style={styles.chatTextInputStyle}
          />

          <TouchableOpacity onPress={() => {
            let arr=this.state.arr
            arr.push(this.state.textChat)
            this.setState({arr:arr,textChat:" "})
          }}

          >
            <Text style={styles.buttonStyle}>send</Text>
            </TouchableOpacity>

        </View>

      </View>
    );
  }

}
