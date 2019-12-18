//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import {postBlogs} from '../actions'
import {connect} from 'react-redux'


// create a component
class Post extends Component {
  state={
      title:"",
      content:"",
      price:""
  }

  submit = () =>{
      this.props.postBlogs(this.state.title, this.state.content, this.state.price)
      this.setState({
        title:"",
        content:"",
        price:""
      })
      this.props.navigation.navigate('Advertisements')

  }

    render() {
        return (
    <View style={styles.container}>
        <Text>Post</Text>
        <TextInput style={{marginTop:20, borderColor:'gray', borderWidth:1}} placeholder=" title" onChangeText={title => this.setState({title})} value={this.state.title} />
        <TextInput style={{marginTop:20, borderColor:'gray', borderWidth:1}} multiline placeholder=" description" onChangeText={content => this.setState({content})} value={this.state.content} />
        <TextInput style={{marginTop:20, borderColor:'gray', borderWidth:1}} keyboardType='numeric' placeholder=" price" onChangeText={price => this.setState({price})} value={this.state.price} />
        <View style style={{marginTop:20}}>
            <Button title="Submit" onPress={this.submit} />
        </View>
    </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding:30,
        marginTop:20,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default connect(null, {postBlogs})(Post);