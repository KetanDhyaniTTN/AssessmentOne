import React, {Component} from 'react';  
import { SafeAreaView, Text, View} from 'react-native';  
import AssessmentOne from './AssessmentOne';
export default class App extends Component{  
    render() {  
      return (  
        <View>  
            <SafeAreaView>
         <AssessmentOne name={'ketann'}/>
         <AssessmentOne name={'poojjaa'}/>
         <AssessmentOne name={'sapna'}/>

          </SafeAreaView> 
        </View>  
      );  
    }  
  }  
  