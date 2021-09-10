import { StyleSheet, SafeAreaView, Image, ScrollView, Text, View } from 'react-native';
import { AntDesign, Octicons, Feather} from '@expo/vector-icons';


const HomeHeader = ()=>{

    return (
        <View>
            <View style={[styles.buttonsContainer, {flexDirection: 'row', alignItems: 'center',}]}>

                <Image source={{uri: "https://picsum.photos/200/300"}} />

                <Button icon={<Octicons name="diff-added" size={25} />} buttonStyle={{paddingLeft: 180, backgroundColor: "white"}}/>

                <Button icon={<AntDesign name="hearto" size={25} />} buttonStyle={{paddingLeft: 22, backgroundColor: "white"}}/>

                <Button icon={<Feather name="send" size={25} />} buttonStyle={{paddingLeft: 9, backgroundColor: "white"}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer:{
        flex: 1
    }
})