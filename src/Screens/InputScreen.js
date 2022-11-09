import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, editData } from '../Actions/Actions'

export default function InputScreen({route}) {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const {info} = useSelector(state => state)
  const dispatch = useDispatch();
  const {nav,item,edit}=route.params

  const handleAdd = () => {
    if (edit) {
      const previnfo = info[nav]
      const updateinfo = previnfo.map((curr) => {
          if (curr.id === item.id) {
              return {
                  ...curr,
                  title: title,
                  subTitle: subtitle
              }
          }
          else {
              return curr
          }
      })
      dispatch(editData(updateinfo, nav))
  }
  else{
    dispatch(addData([...info[nav], { title: title, subtitle: subtitle }],nav))
  }
  }
  return (
    <View style={styles.mainView}>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} placeholder='enter  title'></TextInput>
      <TextInput style={styles.input} value={subtitle} onChangeText={(text) => setSubtitle(text)} placeholder='enter subtitle'></TextInput>
      <View style={styles.addButton}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}><Text style={styles.buttonText}>ADD NEW DATA</Text></TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems:'center',
    borderWidth: 2,
    margin: 20,
    borderRadius: 10,

  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 30,
    width: 200,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '800'
  },
  input: {
    padding: 15,
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    marginLeft: 10,
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
})