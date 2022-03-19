import React, {useState} from "react";
import { Text, View, Image, Button, ScrollView, TextInput, FlatList, StyleSheet, SectionList, VirtualizedList, SafeAreaView,StatusBar,Platform } from "react-native";





// const Cat =(props) =>{
//   return(
//     <View>
//       <Text>I'm {props.name}, a cat!</Text>
//     </View>
//   );
// }



// const icon =()=>{
//   return (
//     <View>
//       <Image
//         source={{uri:
// "https://reactnative.dev/docs/assets/p_cat1.png"}}
//         style={{width: 200, height: 200}}
//       />
//       <Text>Hello, I am your cat!</Text>
//     </View>
//   );
// }

// const output =()=>{
//   return (
//   <View>
//     <Text>test helllo From OP</Text>
//     <Text
//     style={{ 
//       heaight:100, 
//       borderColor:'red', 
//       borderWidth: 5 
//       }}
//       >
//         <Cafe/>
//         </Text>
//   </View>

//   );
// }

// const Cat = (props) =>{
//   const[isHungry, setIsHungry] = useState(true);

//   return(
//     <View>
//       <Text>
//         I Am {props.name}, and i am {isHungry?"BanduHaa":"Furifa"}! 
//       </Text>
//       <Button 
//       onPress={()=>{
//           setIsHungry(false);
//       }}
//       disabled={!isHungry}
//       title={isHungry?"pour some Milk,Pls":"Thanks"}
//       />
//     </View>
//   );
// }

// const Cafe = () => {
//   return  (
//     <>
//       {/* <Text>Welcome home to Cafe!</Text> */}
//       <Cat name= "lail"/>
//       <Cat name= "Ali"/>
//       <Cat name= "Hasan"/>
//       </>
//   )
// }

// export default Cafe;

//This Panel is for TEXT input field

// const logo={
//   uri:'https://reactnative.dev/docs/assets/p_cat1.png',
//   width:64,
//   height:64
// };

// const pizzaTranslator=()=>{
//   const [text,setText] =useState('');
//     return(
//       <ScrollView>
//       <View style={{padding:10}}>
//         <Text style={{fontSize: 40}}>scroll here</Text>
//         <Image source={logo}/> 
//         <Image source={logo}/> 
//         <Image source={logo}/> 
//         <Text style={{fontSize: 60}}>Keep scrolling here</Text>
//         <Image source={logo}/> 
//         <Image source={logo}/> 
//         <Image source={logo}/> 
//         <Text style={{fontSize: 80}}>Keep scrolling and scrolling here</Text>
//         <Image source={logo}/> 
//         <Image source={logo}/> 
//         <Image source={logo}/> 
//         <TextInput 
//         style ={{height: 40, borderBottomWidth: 3, borderColor:'red'}}
//         placeholder="Type here to translate!"
//         onChangeText={newText=>setText(newText)}
//         defaultValue={text}

//         />
//         <Text style={{padding:10, fontSize:42}}>
//          {text.split(' ').map((word)=>word&&'❤').join('')} 
//           </Text>
//       </View>
//       </ScrollView>


      
//     );
// }

//export default pizzaTranslator;



// const App=()=> (
//   <ScrollView>
// <Text style={{fontSize: 40}}>scroll here</Text>
// <Image source={logo}/> 
// <Image source={logo}/> 
// <Image source={logo}/> 
// <Text style={{fontSize: 60}}>Keep scrolling here</Text>
// <Image source={logo}/> 
// <Image source={logo}/> 
// <Image source={logo}/> 
// <Text style={{fontSize: 80}}>Keep scrolling and scrolling here</Text>
// <Image source={logo}/> 
// <Image source={logo}/> 
// <Image source={logo}/> 
//   </ScrollView>
// );

// export default App;



// const FlastListbasics=()=>{
//   return (
// <View style={styles.container}>
// <FlatList data={[
//   {Key:'Ali'},
//   {Key:'bully'},
//   {Key:'Ahmed'},
//   {Key:'carrot'},
//   {Key:'Ali'},
//   {Key:'bully'},
//   {Key:'Ahmed'},
//   {Key:'carrot'},
//   {Key:'Ali'},
//   {Key:'bully'},
//   {Key:'Ahmed'},
//   {Key:'carrot'},
//   {Key:'Ali'},
//   {Key:'bully'},
//   {Key:'Ahmed'},
//   {Key:'carrot'},
// ]}
//   renderItem={({item})=><Text style={styles.item}>{item.Key}
//   </Text>}
//   />
// </View>
//   );
// }



const SectionListBasic=()=>{
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
<View style={styles.container}>
<SectionList 
  sections={[
    {title:'A', data:['Devin','Dom','Dim', 'Dams','Dominic']},
    {title:'B', data:['Fam','Fom','Fim',"Fooooooom"]},
    {title:'D', data:['AAAam','Akom','AAFim',"AFooooooom"]},
    {title:'E', data:['Devin','Dom','Dim', 'Dams','Dominic']},
    {title:'C', data:['Fam','Fom','Fim',"Fooooooom"]},
    {title:'Z', data:['Devin','Dom','Dim', 'Dams','Dominic']},
    {title:'Y', data:['Fam','Fom','Fim',"Fooooooom"]},

]} 
  renderItem={({item})=><Text style={styles.item}>{item}
  </Text>}
  renderSectionHeader={({section})=><Text style={styles.SectionHeader}>{section.title}</Text>}
  keyExtractor={(item,index)=>index}
  />
</View>
</SafeAreaView>
  );
}
export default SectionListBasic;





//Style sheet from down on here, nothing more
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  SectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
//    backgroundColor: 'rgba(247,247,247,1.0)',
    backgroundColor: Platform.OS==='ios'?'#34deeb':'#c034eb',
  },
});
