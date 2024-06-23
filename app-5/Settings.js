
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Settings() {
  
  return (
    <View style={styles.container}>

      <Text style={styles.Header}>Settings</Text>

        <View style={styles.mainBody}> 

        <View style={styles.content}>
          <Text style={styles.categoryHeading}>Language</Text>
          <Image style={styles.greaterThanIcon} source={require('./assets/greater-than-symbol.png')} />
        </View>

        
        <View style={styles.content}>
          <Text style={styles.categoryHeading}>My Profile</Text>
          <Image style={styles.greaterThanIcon} source={require('./assets/greater-than-symbol.png')} />
        </View>

        
        <View style={styles.content}>
          <Text style={styles.categoryHeading}>Contact Us</Text>
          <Image style={styles.greaterThanIcon} source={require('./assets/greater-than-symbol.png')} />
        </View>

        
        <View style={styles.content}>
          <Text style={styles.categoryHeading}>Change Password</Text>
          <Image style={styles.greaterThanIcon} source={require('./assets/greater-than-symbol.png')} />
        </View>

        
        <View style={styles.content}>
          <Text style={styles.categoryHeading}>Privacy Policy</Text>
          <Image style={styles.greaterThanIcon} source={require('./assets/greater-than-symbol.png')} />
        </View>



        <View style={styles.themeSection}>
        <Text style={styles.Theme}>Theme</Text>
        <Image style={styles.togglebutton} source={require('./assets/toggleButton.png')} />
        </View>
        

        




        </View>


        <View style={styles.section6}>

                  
<View>
<Image style={styles.HomeIcon} source={require('./assets/home.png')} />
<Text style={styles.Home}>Home</Text>
</View>


<View>
<Image source={require('./assets/myCards.png')} />
<Text style={styles.section6Text}>My Cards</Text>
</View>


<View>
<Image source={require('./assets/statistics.png')} />
<Text style={styles.section6Text}>Statistics</Text>
</View>



<View>
<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
  <Image style={styles.settings} source={require('./assets/settings.png')} />
  <Text style={styles.settingsText}>Settings</Text>
</TouchableOpacity>
</View>


</View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section6: {
    height:70,
    top:155,
    left:23,
    marginRight:20, 
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  Home: {
   color:'#ababab',
   left:-8,
  },
  HomeIcon: {
    tintColor:'#ababab',
  },
  section6Text: {
    color:'#ababab',
    left:-17.5,
  },
  settings: {
    tintColor:'#2e6bcd',
  },
  settingsText: {
  color:'#2e6bcd',
  left:-17.5,
  },
  Header: {
    fontSize: 30,
    top:70,
    textAlign:'center',
  },
  content: {
    top:110,
    left:13,
    height:45,
    marginBottom:30,
    marginRight:25,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomColor:'#ededed',
    borderBottomWidth:2,
  },
  categoryHeading: {
    fontSize:20,
  },
  Theme: {
  top:130,
  fontSize:30,
  left:13,
  },
  greaterThanIcon: {
    height:50,
    width:50,
    lineHeight:12,
    tintColor:'#959595',
    top:-11,
    marginRight:0,
  },
  togglebutton: {
    height:60,
    width:80,
    top:120,
    left:155,
  },
  themeSection: {
    display:'flex',
    flexDirection:'row',
  },
});
