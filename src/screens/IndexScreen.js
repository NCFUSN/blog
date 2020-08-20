import React, {useState, useContext} from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import {Context} from '../context/BlogContext';
import { ScrollView } from 'react-native-gesture-handler';

const IndexScreen = () => {

    const { state, addBlogPost } = useContext(Context);

    const getHeader = () => {
        return <Button title = 'Add Post' 
        onPress = {addBlogPost}
    />
    };

    const getFooter = () => {
        return null;
    };

    return (<View>

        <FlatList 
            data = {state}
            keyExtractor = { blogPost => blogPost.title }
            renderItem = { ({ item }) => {
                return <Text>{item.title}</Text>
            }}
            ListHeaderComponent={getHeader}
            ListFooterComponent={getFooter}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    //
})

export default IndexScreen
