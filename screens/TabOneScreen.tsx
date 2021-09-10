import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Post from '../components/Post/Post.tsx';

const posts = [
  {id: 0, name: "Mandla", caption:"Hey guys", timePosted: "20 mns ago"},
  {id: 1, name: "Amo" , caption:"Hey guys", timePosted: "2days ago"},
  {id: 2, name: "Clarrisa", caption:"Hey guys", timePosted: "2mns ago"},
  {id: 3, name: "Karabo", caption:"Hey boys", timePosted: "20 mns ago"},
  {id: 4, name: "Sibusiso", caption:"Good day guys", timePosted: "20 mns ago"}
]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
