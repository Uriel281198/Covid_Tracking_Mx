import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Dimensions, Image, StatusBar, StyleSheet } from 'react-native';

import styled from 'styled-components';
import BackgroundHeader from './src/components/BackgroundHeader';
import BottomTab from './src/components/BottomTab';
import HomeScreen from './src/components/HomeScreen';
import CasesScreen from './src/components/CasesScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const App = () => {

  const [tab, setTab] = useState(0);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00796b" />
      <BackgroundHeader style={styles.bg} />
      <Container>
        <BackgroundHeader style={styles.bg} />
        <Container>
          {tab == 0 && <HomeScreen />}
          {tab == 1 && <CasesScreen />}
        </Container>
        <BottomTab selected={tab} onSelected={index => setTab(index)} />
      </Container>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width
  }
})

const Container = styled.View`
  flex:1;
  
`;

