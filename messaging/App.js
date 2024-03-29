import React from 'react';
import {StyleSheet, View } from 'react-native';
import Status from './components/status';

export default class App extends React.Component {

  renderMessageList(){
    return (
      <View style  = {styles.content}></View>
    );
  }

  renderInputMethodEditor(){
    return (
      <View style = {styles.inputMethodEditor}></View>
    );
  }


  renderToolBar(){
    return (
      <View style = {styles.toolbar}></View>
    );
  }
  render(){
    return (
      <View style ={styles.container}>
      <Status/>
        {this.renderMessageList()}
        {this.renderToolBar()}
        {this.renderInputMethodEditor()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  content:{
    flex:1,
    backgroundColor: 'white',
  },
  inputMethodEditor:{
    flex:1,
    backgroundColor: 'white',
  },
  toolbar:{
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor:'white',
  },
});
