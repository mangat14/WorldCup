import React from "react";
import { StyleSheet, View, TextInput, Text, Alert, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import styles from "./styles/LoginStyles";
import { colors } from "../utils/colors";
import {connect,Connect} from "react-redux";
import {getLoginData} from "../actions/HomeAction";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked1: false,
      isChecked2: false,
      email: "",
      password: "",
    };
  }

  validEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <Text style={styles.login}>
            Login
          </Text>
        </View>
        <View style={styles.checkView}>
          <View style={styles.checkInner}>
            <CheckBox
              value={this.state.isChecked1}
              onValueChange={(value) => {
                this.setState({ isChecked1: value, isChecked2: false });
              }}
              tintColors={{ true: colors.rgb_7807d0, false: "black" }}
            />
            <Text style={styles.checkText}>Seeker</Text>
          </View>
          <View style={styles.checkInner}>
            <CheckBox
              value={this.state.isChecked2}
              onValueChange={(value) => {
                this.setState({ isChecked2: value, isChecked1: false });
              }}
              tintColors={{ true: colors.rgb_7807d0, false: "black" }}
              //boxType='circle'
            />
            <Text style={styles.checkText}>Recruiter</Text>
          </View>

        </View>
        <View>
          <Text style={styles.inputText}>Your Email*</Text>
          <TextInput
            placeholder={"Enter your email"}
            style={styles.input}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.pwdRef.focus();
            }}
            blurOnSubmit={false}
          />
          <Text style={styles.inputText}>Password*</Text>
          <TextInput
            placeholder={"Enter your password"}
            ref={(ref1) => this.pwdRef = ref1}
            maxLength={10}
            style={styles.input}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
          <TouchableOpacity
            onPress={() => this.state.isChecked1 == true || this.state.isChecked2 == true && this.validEmail(this.state.email)
            && this.state.password != "" ?
              Alert.alert("email is " + this.state.email + "\n" + "password is " + this.state.password) :
              Alert.alert("error")}
            style={styles.button}>
            <Text>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.Text1}>
            <Text style={styles.Text2}>Don't have an acoount</Text>
            <Text style={styles.Text3}
                  onPress={() => this.props.navigation.navigate("SignUp")}> Register?</Text>
          </Text>
        </View>

      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mostPopularData: state.HomeReducer.response,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchHomeData: (page) => {
      dispatch(getHomeData(page));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(LogIn)
