import React from "react";
import { TextInput, TouchableOpacity, Text, View, FlatList } from "react-native";
import styles from "./styles/chatStyles";
import { SocketIOClient } from "socket.io-client";
import {Server_URL} from "../constants/index";

export default class chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ["hello", "guys", "how", "are", "you"],
      textChat: "",
    };
    this.socket=SocketIOClient(Server_URL);
    this.socket.emit('channel1','hi server');
    this.socket.on('channel2', (data) => {
      console.log('Data recieved from server', data);
    });

  }

  render() {
    return (
      <View style={styles.chatView}>
        <Text style={styles.textStyle}>ChatBox</Text>

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
