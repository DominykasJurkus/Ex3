//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import {editBlog} from '../actions'
import {connect} from 'react-redux'


// create a component
class Edit extends Component {
  state={
      title:this.props.navigation.state.params.title,
      content:this.props.navigation.state.params.content,
      price:this.props.navigation.state.params.price,
      key:this.props.navigation.state.params.key
  }

  submit = () =>{
    this.props.editBlog(this.state.title, this.state.content, this.state.price, this.state.key);

    this.setState({
        title:"",
        content:"",
        price:"",
        key:""
    })
    this.props.navigation.navigate('Ads')

  }

    render() {
        return (
    <View style={styles.container}>
        <Text>Edit</Text>
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
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default connect(null, {editBlog})(Edit);