import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';
import Modal from 'react-native-modal';


const earthquakeData = [
  {
    magnitude: 'Less than 3.5 ',
    effects: 'Recorded on local seismographs, but generally not felt.',
  },
  {
    magnitude: '3.5 - 5.4',
    effects: 'Often felt, but rarely cause damage.',
  },
  {
    magnitude: 'Under 6.0',
    effects: 'At most slight damage to well-designed buildings.',
  },
  {
    magnitude: '6.1 to 6.9',
    effects: 'Can cause damage to poorly constructed buildings',
  },
  {
    magnitude: '7.0 to 7.9',
    effects: 'Major earthquake. Serious damage.',
  },
  {
    magnitude: '8.0 or greater',
    effects: 'Great earthquake. Can cause serious damage.',
  },
];


const EarthquakeSection = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.magnitude}</Text>
      <Text style={styles.textCell}>{item.effects}</Text>
    </View>
  );

  return(
    <View style={styles.container}>
      <View style={styles.rowTitle}>
        <Title style={styles.title}>Earthquake Quake Record</Title>
        <TouchableOpacity onPress={toggleBottomSheet}>
          <Text
            style={{
              color: "#839D8E",
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Scale
          </Text>
        </TouchableOpacity>
        
        <Modal
          isVisible={isBottomSheetVisible}
          onBackdropPress={toggleBottomSheet}
          swipeDirection="down"
          onSwipeComplete={toggleBottomSheet}
          style={styles.bottomSheet}
        >
          <View style={styles.bottomSheetContent}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerCell}>Magnitude</Text>
                <Text style={styles.headerTextCell}>Earthquake Effects</Text>
              </View>
              <FlatList
                data={earthquakeData}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>
        

      </View>
      <Card style={styles.lowCard}>
        <Card.Content style={styles.row}>
          <View style={styles.center}>
            <Text style={styles.text}>2.5</Text>
          </View>
          <Card.Content style={styles.column}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>19 min ago</Text>
            <Text style={{ fontSize: 16,  }}>CROATIA</Text>
          </Card.Content>      
        </Card.Content>
      </Card>

      <Card style={styles.midCard}>
        <Card.Content style={styles.row}>
          <View style={styles.center}>
            <Text style={styles.text}>4.7</Text>
          </View>
          <Card.Content style={styles.column}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>4 hr 52 min ago</Text>
            <Text style={{ fontSize: 16, }}>CROATIA</Text>
          </Card.Content>      
        </Card.Content>
      </Card>

      <Card style={styles.highCard}>
        <Card.Content style={styles.row}>
          <View style={styles.center}>
            <Text style={styles.text}>7.8</Text>
          </View>
          <Card.Content style={styles.column}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>19 hr 52 min ago</Text>
            <Text style={{ fontSize: 16,  }}>ALBANIA</Text>
          </Card.Content>      
        </Card.Content>
      </Card>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  lowCard: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#90EE90'
  },
  midCard: {
    marginTop:20,
    flex: 1,
    backgroundColor: 'yellow'
  },
  highCard: {
    marginTop:20,
    flex: 1,
    backgroundColor: 'red'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTextCell: {
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    padding:6
  },
  textCell: {
    flex: 2,
    textAlign: 'center',
    padding:6,
  },
  center: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 48, 
  },
  title: {
    fontWeight: 'bold', // Make the title text bold
  },
  bottomSheet: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheetContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomSheetContainer: {
      
  },
});


export default EarthquakeSection