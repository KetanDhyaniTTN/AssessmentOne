import React from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { increase, decrease,AsyncData} from './Actions/Actions'

class Counter extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.AsyncData()
    
  }

  

  increaseButton = () => {
    const { increaseCount } = this.props;
    increaseCount(1)
  };
  decreaseButton = () => {
    const { decreaseCount } = this.props;
    decreaseCount(1)
  }
  render() {
    // const { infoReducer } = this.props;
    const{dataApi}=this.props.data
    //console.log('-----',infoReducer)
    return (
      <SafeAreaView style={styles.safeView}>

        <View style={styles.counter}>
          <Button title="+"
            style={styles.addButton}
            onPress={this.increaseButton} />
          <Text>{`$info.count`}</Text>

          <Button title="-"
            style={styles.minusButton}
            onPress={this.decreaseButton}
          />
        </View>

        <Button title="Press here" />
        <FlatList
        data={data}
        renderItem={({item})=>{
          return(
            <View>
              <Text>{item.title}</Text>

            </View>
          )

        }}

    
      />




      </SafeAreaView>

    );
  }
}

const mapStateToProps = state => {
  console.log('state-----',state)
  return {
    // infoReducer: state.CountReducer,
    data:state.CountReducer
  };
};

const mapDispatchToProps = {
AsyncData
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 90,
  },
  safeView: {
    backgroundColor: 'white'
  },




});

