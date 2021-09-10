import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Image,Text} from 'react-native';
import { Button, Icon} from 'react-native-elements';
import { AntDesign, SimpleLineIcons, EvilIcons, Feather, Fontisto, FontAwesome, Ionicons} from '@expo/vector-icons';

const Post = (props) =>{
    const [num1, setNum1] = React.useState(2);
    const [num2, setNum2] = React.useState(6);
    const [num3, setNum3] =  React.useState(null);

    const addTwoNumbers = (x, y)=>{
        setNum3(x)
        console.log('We were here')
    }

    return (
        <View style={{marginBottom: 5}}> 
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems:'center'}}> 
                <Image style={styles.profilePic} source={{uri: "https://picsum.photos/200/300"}} />
                <Text style={styles.usernameHeader}>{props.name}</Text>

                <View style={styles.options}>
                    <Button icon={<SimpleLineIcons name="options" size={24} color="black" />} 
                        buttonStyle={{backgroundColor: "transparent"}} />
                </View>
            </View>

            <View>
                <Image style={styles.imageOrVideo} source={{uri: "https://picsum.photos/200/300"}}  />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>

                <Button onPress={()=> addTwoNumbers(num1, num2)} icon={<AntDesign name="hearto" size={25} color="black" /> }
                    buttonStyle={{backgroundColor: "transparent"}} />

                <Button icon={<Fontisto name="comment" size={25} color="black" /> }
                    buttonStyle={{backgroundColor: "transparent"}} />

                <Button icon={<Feather name="send" size={25} color="black" /> }
                    buttonStyle={{backgroundColor: "transparent"}} />

                <Button icon={<FontAwesome name="bookmark-o" size={25} color="black" /> }
                    buttonStyle={{paddingLeft: "70%", backgroundColor: "transparent"}} />
            
            </View>

            <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems:'center'}}>
                <Text style={styles.usernameCaption}> {props.name}</Text> 
                
                <Text style={styles.caption}> {props.caption}</Text> 
            </View>

            
            <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems:'center'}}>
                <Image style={styles.profilePicCurrentUser} source={{uri: "https://picsum.photos/200/300"}}  />
                <Text style={{color: 'grey'}}> Add a comment... </Text>
            </View> 

            <Text style={{color: 'grey', paddingLeft: '1%'}}> {props.timePosted} </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    profilePic:{
        height : 39,
        width : 39,
        borderRadius : 39/2,
        marginHorizontal: 9
    },
    usernameHeader:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    options:{
        paddingLeft: '60%',
    },
    imageOrVideo:{
        paddingTop : 70,
        height: 550,
        width: '100%'
    },
    usernameCaption:{
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: '3%'
    },
    caption:{
        paddingLeft: 2
    },
    profilePicCurrentUser:{
        height: 25,
        width: 25,
        borderRadius: 25/2,
        marginHorizontal: 9
    }
})

export default Post;