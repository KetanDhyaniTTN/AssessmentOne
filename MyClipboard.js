import React, { useState,useEffect } from 'react';
import {SafeAreaView,StyleSheet,View,Text,TouchableOpacity, TextInput,Alert,BackHandler} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
const MyClipboard = (props) => {

  const [inputOne, setInputOne] = useState('');

  const [InputTwo, setInputTwo] = useState('');




  useEffect(() => {

    const backAction = () => {

      Alert.alert("Wait!", "Are you sure you want to go back?", [

        {

          text: "Cancel",

          onPress: () => null,

          style: "cancel"

        },

        { text: "YES", onPress: () => props.navigation.goBack() },

      ]);

      return true;

    };




    const backHandler = BackHandler.addEventListener(

      "hardwareBackPress",

      backAction

    );




    return () => backHandler.remove();

   







 




  const readFromClipboard = async () => {

    //To get the text from clipboard

    let clipboardContent = await Clipboard.getString();

    alert('Text from Clipboard: ' + clipboardContent);

  };




  const writeToClipboard = async () => {

    //To copy the text to clipboard

    Clipboard.setString(input1);

    alert('Copied to Clipboard!');

  };




  return (

    <SafeAreaView style={styles.containerMain}>

      <View style={styles.container}>

        <Text style={styles.titleClip}>

         CLIPBOARD

        </Text>

        <TextInput

          style={styles.inputType}

          onChangeText={(inputOne) => setInputOne(inputOne)}

          value={inputOne}

          placeholder="Type here"

        />

        <View style={styles.button}>

          <TouchableOpacity

            activeOpacity={0.7}

            style={styles.buttonClip}

            onPress={writeToClipboard}>

            {/* Clicking on button will show the rating as an alert */}

            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>

          <TouchableOpacity

            activeOpacity={0.7}

            style={styles.buttonClip}

            onPress={readFromClipboard}>

            {/* Clicking on button will show the rating as an alert */}

            <Text style={styles.buttonText}>Get from Clipboard</Text>

          </TouchableOpacity>

        </View>










      

      </View>

    </SafeAreaView>

  );






//export default MyClipboard;




const styles = StyleSheet.create({

  containerMain: {

    flex: 1,

    // backgroundColor:"blue",

    padding: 10,

    textAlign: 'center',

  },

  titleClip: {

    padding: 8,

    fontSize: 22,

    textAlign: 'center',

    fontWeight: 'bold',

  },

  titleTextsmall: {

    textAlign: 'center',

    marginVertical: 8,

    fontSize: 16,

  },

  button:{

    flexDirection:"row"
 },

  buttonClip: {

    justifyContent: 'center',

    marginTop: 15,

    width: '50%',

    padding: 10,

    backgroundColor: 'red',

    marginRight: 2,

    marginLeft: 2,

  },

  buttonText: {

    color: 'white',

    textAlign: 'center',

  },

  inputType: {

    height: 40,

    borderWidth: 1,

    width: '100%',

    paddingHorizontal: 10,

  },

  
})
export default MyClipboard;
  



