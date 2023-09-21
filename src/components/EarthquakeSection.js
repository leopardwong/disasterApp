import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'



const earthquakeData = [
  {
    magnitude: '2.5 or less',
    effects: 'Usually not felt, but can be recorded by seismograph.',
    estimatedNumber: 'Millions',
  },
  {
    magnitude: '2.5 to 5.4',
    effects: 'Often felt, but only causes minor damage.',
    estimatedNumber: '500,000',
  },
  {
    magnitude: '5.5 to 6.0',
    effects: 'Slight damage to buildings and other structures.',
    estimatedNumber: '350',
  },
  {
    magnitude: '6.1 to 6.9',
    effects: 'May cause a lot of damage in very populated areas.',
    estimatedNumber: '100',
  },
  {
    magnitude: '7.0 to 7.9',
    effects: 'Major earthquake. Serious damage.',
    estimatedNumber: '10-15',
  },
  {
    magnitude: '8.0 or greater',
    effects: 'Great earthquake. Can totally destroy communities near the epicenter.',
    estimatedNumber: 'One every year or two',
  },
];


const EarthquakeSection = () => {
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.magnitude}</Text>
      <Text style={styles.cell}>{item.effects}</Text>
      <Text style={styles.cell}>{item.estimatedNumber}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCell}>Magnitude</Text>
        <Text style={styles.headerCell}>Earthquake Effects</Text>
        <Text style={styles.headerCell}>Estimated Number Each Year</Text>
      </View>
      <FlatList
        data={earthquakeData}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
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
  row: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});


export default EarthquakeSection