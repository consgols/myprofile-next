'use client';

import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const style = StyleSheet.create({
  projectNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ca8a04',
  },
  tenureship: {
    color: '#6b7280',
    fontSize: 8,
    marginLeft: 8,
  },
  description: {
    marginTop: 8,
    fontSize: 12,
  },
});

const JobExperience = () => {
  return (
    <View wrap={false}>
      <View style={{ marginTop: 12, marginBottom: 12 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={style.projectName}>Dometic</Text>
          <View style={style.tenureship}>
            <Text>March 13, 2023 - May 16, 2023</Text>
          </View>
        </View>
        <Text style={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at accumsan quam. Nullam commodo tincidunt
          ante nec pulvinar. Sed vulputate interdum enim, eu ullamcorper nisl suscipit ac.
        </Text>
      </View>
      <View style={{ marginTop: 12, marginBottom: 12 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={style.projectName}>Carpet & Flooring</Text>
          <View style={style.tenureship}>
            <Text>March 12, 2022 - February 24, 2023</Text>
          </View>
        </View>
        <Text style={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at accumsan quam. Nullam commodo tincidunt
          ante nec pulvinar. Sed vulputate interdum enim, eu ullamcorper nisl suscipit ac.
        </Text>
      </View>
    </View>
  );
};

export default JobExperience;
