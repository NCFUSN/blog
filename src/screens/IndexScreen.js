import React, {useState, useContext} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    const blogPosts = useContext(BlogContext);
    return <View>
        <FlatList 
            data = {blogPosts}
            keyExtractor = { blogPost => blogPost.title }
            renderItem = { ({ item }) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    //
})

export default IndexScreen
