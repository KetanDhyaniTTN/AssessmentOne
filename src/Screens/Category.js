import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React from 'react';
//import style from './ParticularCatStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../Actions/Actions';
import { editData } from '../Actions/Actions';
import { toggledata } from '../Actions/Actions';

const Category = ({ route, navigation }) => {
  const { info } = useSelector((state) => state)
  const { nav } = route.params
  const dispatch=useDispatch();

  const handleAddButton = () => {
    navigation.navigate('InputScreen', { nav })
  }
  const handDeleteButton=(id)=>{
    const prevInfo=info[nav];
    const newInfo=prevInfo.filter(item=>item.id!==id);
    dispatch(deleteData(newInfo,nav));
}

const handleEditButton=(item)=>{
  dispatch(toggledata());
  const newInfo=info[nav];
  navigation.navigate('InputScreen',{nav,item,edit:true})
}

  return (
    <View style={styles.mainContainer}>
      {console.log("================>",nav)}
      {info[nav]?.map((item) => {
        return (
          <View style={styles.mainView}>
            <Text style={styles.titles}>{item.title}</Text>
            <Text style={styles.titles}>{item.subtitle}</Text>

            <View style={styles.buttonFunc}>
            <TouchableOpacity style={styles.deleteButton}
            onPress={() => handDeleteButton(item.id)}>
          <Text style={styles.addText}>DELETE</Text>
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.editButton}
        onPress={handleEditButton}>
          <Text style={styles.editText}>EDIT DATA</Text>
        </TouchableOpacity>
        </View>
          </View>
        )
      })}

      <View style={styles.buttonAdd}>
         <TouchableOpacity style={styles.addButton}
          onPress={handleAddButton}>
            {/* <Text style={styles.addText}>ADD DATA</Text> */}
            <Image source={require('../Images/icons8-add-48.png')}
            style={styles.addImage}/>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  mainView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius:20,
  },
  titles:{
    fontSize:18,
    marginLeft:15,
  },
  buttonFunc:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black'

  },
  addImage: {
    height:70,
    width:70

  },
  buttonAdd: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical:10,
    width:60,
    marginVertical: 20,
    borderRadius: 20,
    marginLeft:15,
  },
  addText: {
    fontSize:13,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700'
  },
  editButton: {
    backgroundColor: 'red',
    padding: 4,
    width:70,
    marginVertical: 20,
    borderRadius: 20,
    marginLeft:10,
  },
  editText:{
    fontSize:12,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700'
  },
})

export default Category;