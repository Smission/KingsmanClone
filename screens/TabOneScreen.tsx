import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Post from '../components/Post/Post.tsx';
import HomeHeader from '../components/Headers/HomeHeader.tsx';

const posts = [
  {id: 0, name: "mandla", caption:"Hey guys", timePosted: "20 mns ago"},
  {id: 1, name: "amo" , caption:"Hey guys", timePosted: "2days ago"},
  {id: 2, name: "clarrisa", caption:"Hey guys", timePosted: "2mns ago"},
  {id: 3, name: "karabo", caption:"Hey boys", timePosted: "20 mns ago"},
  {id: 4, name: "sibusiso", caption:"Good day guys", timePosted: "20 mns ago"}
]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white'}} >
      <View style={{ paddingLeft: 5}} >  
        <HomeHeader />
      </View>
      <ScrollView styles={{paddingTop: 90}} horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      {
        posts.map((post) =>(
          <Post key={post.id} name={post.name} caption={post.caption} timePosted= {post.timePosted}/>
        ))
      }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
