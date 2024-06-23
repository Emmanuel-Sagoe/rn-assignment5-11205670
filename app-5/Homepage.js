import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';



export default function Homepage() {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>

    <StatusBar style="#ffff"  />


      <ScrollView>

                  <View style={styles.section1}>
                          

                          <View>
                          <Image source={require('./assets/profile.png')} />
                          </View>

                          <View style={styles.section1Texts}>
                            <Text style={styles.section1welcomeText}>
                            Welcome back,
                            </Text>

                            <Text style={styles.section1NameText}>
                              Eric Atsu
                            </Text>
                          </View>

                          <View style={styles.searchEllipse}>
                          <Image source={require('./assets/search.png')} />
                          </View>


                  </View>

                <View style={styles.section2}> 
                <Image source={require('./assets/Card.png')} />
                </View>

                <View style={styles.section3}>

                            <View>
                                <View style={styles.section3ImageEllipse}>
                                <Image source={require('./assets/send.png')} />
                                </View>
                                <Text style={styles.section3Text}>Sent</Text>
                            </View>

                            <View>
                                <View style={styles.section3ImageEllipse}>
                                <Image source={require('./assets/recieve.png')} />
                                </View>
                                <Text style={styles.section3Text}>Recieve</Text>
                            </View>

                            <View>
                                <View style={styles.section3ImageEllipse}>
                                <Image source={require('./assets/loan.png')} />
                                </View>
                                <Text style={styles.section3Text}>Loan</Text>
                            </View>

                            <View>
                              <View style={styles.section3ImageEllipse}>
                              <Image source={require('./assets/topUp.png')} />
                              </View>
                              <Text style={styles.section3Text}>Topup</Text>
                            </View>

                </View>

                <View style={styles.section4}>
                      <Text style={styles.Transaction}>Transaction</Text>
                      <Text style={styles.SeeAll}>See all</Text>
                </View>

                <View style={styles.section5}>

                    <View style={styles.section5Tabs}>
                        <View style={styles.section5ImageEllipse}>
                        <Image source={require('./assets/apple.png')} />
                        </View>

                        <View style={styles.Section5Text}>
                        <Text style={styles.AppName}>  Apple Store</Text>
                        <Text style={styles.Category}>  Entertainment</Text>
                        </View>

                        <View style={styles.PriceSection}>
                          <Text style={styles.Price}>- $5,99</Text>
                        </View>
                    </View>

                    <View style={styles.section5Tabs}>
                        <View style={styles.section5ImageEllipse}>
                        <Image source={require('./assets/spotify.png')} />
                        </View>

                        <View style={styles.Section5Text}>
                        <Text style={styles.AppName}>  Spotify</Text>
                        <Text style={styles.Category}>   Music</Text>
                        </View>

                        <View style={styles.PriceSection}>
                          <Text style={styles.Price}>- $12,99</Text>
                        </View>
                    </View>

                    <View style={styles.section5Tabs}>
                        <View style={styles.section5ImageEllipse}>
                        <Image source={require('./assets/moneyTransfer.png')} />
                        </View>

                        <View style={styles.Section5Text}>
                        <Text style={styles.AppName}>Money Transfer</Text>
                        <Text style={styles.Category}>Transaction</Text>
                        </View>

                        <View style={styles.PriceSection}>
                          <Text style={styles.Price2}> $300</Text>
                        </View>
                    </View>

                    <View style={styles.section5Tabs}>
                        <View style={styles.section5ImageEllipse}>
                        <Image source={require('./assets/grocery.png')} />
                        </View>

                        <View style={styles.Section5Text}>
                        <Text style={styles.AppName}>Grocery</Text>
                        <Text style={styles.Category}>Transaction</Text>
                        </View>

                        <View style={styles.PriceSection}>
                          <Text style={styles.Price}>- $ 88</Text>
                        </View>
                    </View>

                    <View style={styles.section5Tabs}>
                        <View style={styles.section5ImageEllipse}>
                        <Image source={require('./assets/grocery.png')} />
                        </View>

                        <View style={styles.Section5Text}>
                        <Text style={styles.AppName}>Grocery</Text>
                        <Text style={styles.Category}>Transaction</Text>
                        </View>

                        <View style={styles.PriceSection}>
                          <Text style={styles.Price}>- $ 88</Text>
                        </View>
                    </View>

                </View>

               


      </ScrollView>


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
                      <Text style={styles.section6Text}>Settings</Text>
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
  section1: {
    left:13,
    marginRight:25,
    marginTop:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  section1welcomeText: {
    marginRight:100,
    color:'#ababab',
  },
  section1NameText: {
  fontSize:20,
  lineHeight:35,
  },
  searchEllipse: {
    backgroundColor:'#F2F3F4',
    width:50,
    height:50,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
  },
  section2: {
    left:13,
    marginRight:20,
    top:10,
  },
  section3: {
    top:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  section3ImageEllipse:{
    width:60,
    height:60,
    borderRadius:50,
    backgroundColor:'#F2F3F4',
    alignItems:'center',
    justifyContent:'center',
  },
  section3Text: {
    textAlign:'center',
    top:5,
  },
  section4: {
    top:40,
    display:'flex',
    flexDirection:'row',
    left:13,
    alignItems:'center',
  },
  Transaction: {
    fontSize:20,
  },
  SeeAll: {
    color:'#0b57d0',
    fontSize:16,
    left:175,
  },
  section5: {
    top:50,
    left:13,
    display:'flex',
    flexDirection:'column',
  },
  section5Tabs: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10,
  },
  section5ImageEllipse: {
    height:45,
    width:45,
    backgroundColor:'#F2F3F4',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
  },
  Section5Text: {
    right:50,
    width:150,
  },
  AppName: {
fontSize:18,
  },
  Category: {
    color:'#ababab',
  },
  PriceSection: {
    right:35, 
    justifyContent:'center',
  },
  Price: {
    fontSize:18,
  },
  Price2: {
    fontSize:18,
    color:'#0b57d0',
  },
  section6: {
    height:70,
    left:23,
    marginRight:20, 
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  Home: {
   color:'#2e6bcd',
   left:-8,
  },
  HomeIcon: {
    tintColor:'#2e6bcd',
  },
  section6Text: {
    color:'#ababab',
    left:-17.5,
  },
  settings: {
    tintColor:'grey',
  }
});



