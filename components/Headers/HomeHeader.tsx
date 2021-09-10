import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { AntDesign, SimpleLineIcons, EvilIcons, Feather, Fontisto, FontAwesome, Octicons } from '@expo/vector-icons';
import { Comment } from '../../assets/images/Comment.png'

const HomeHeader = () => {
  return (
     <View >        
        <View style={{flexDirection: "row", alignItems: 'center'}}>
            <Image source={require('../../assets/images/IGLogo.png')} />

            <View style={{flexDirection: "row", paddingLeft:'45%'}}>
                <Button
                    icon={<Octicons name="diff-added" size={25} />}
                    buttonStyle={{ backgroundColor: "white"}}/>

                <Button
                    icon={<AntDesign name="hearto" size={25}/>}
                    buttonStyle={{ backgroundColor: "white"}}/>

                <Button
                    icon={<Feather name="send" size={25} />}
                    buttonStyle={{ backgroundColor: "white"}}/>
            </View>
        </View>

    </View>
  );
}



export default HomeHeader;