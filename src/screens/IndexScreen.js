import React, {useState, useContext} from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    const { data, addBlogPost } = useContext(BlogContext);
    return (<View>
        <Button title = 'Add Post' 
            onPress = {addBlogPost}
        />
        <FlatList 
            data = {data}
            keyExtractor = { blogPost => blogPost.title }
            renderItem = { ({ item }) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    //
})

export default IndexScreen
