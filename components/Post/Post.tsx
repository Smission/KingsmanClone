import * as React from 'react';
import { View, Text} from 'react-native';

const Post = (props) =>{
    return (
        <View> 
            <Text> This is my Post component, my name is {props.name}</Text>
        </View>
    )
}

export default Post;