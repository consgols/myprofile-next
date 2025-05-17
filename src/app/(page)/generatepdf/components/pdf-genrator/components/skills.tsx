'use client';

import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const style = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

const Skills = () => {
  return (
    <View>
      <View style={style.container}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Jquery</Text>
          <Text style={{ marginLeft: 4, color: '#6b7280', fontSize: 10 }}>10 years (2021 last used)</Text>
        </View>
        <View
          style={{
            borderRadius: 8,
            width: '100%',
            backgroundColor: '#e6e6e6',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              width: '80%',
              backgroundColor: '#ca8a04',
              zIndex: 10,
              color: '#ffffff',
            }}
          >
            <Text>Advanced</Text>
          </View>
        </View>
      </View>
      <View style={style.container}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Jquery</Text>
          <Text style={{ marginLeft: 4, color: '#6b7280', fontSize: 10 }}>10 years (2021 last used)</Text>
        </View>
        <View
          style={{
            borderRadius: 8,
            width: '100%',
            backgroundColor: '#e6e6e6',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              width: '80%',
              backgroundColor: '#ca8a04',
              zIndex: 10,
              color: '#ffffff',
            }}
          >
            <Text>Advanced</Text>
          </View>
        </View>
      </View>
      <View style={style.container}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Jquery</Text>
          <Text style={{ marginLeft: 4, color: '#6b7280', fontSize: 10 }}>10 years (2021 last used)</Text>
        </View>
        <View
          style={{
            borderRadius: 8,
            width: '100%',
            backgroundColor: '#e6e6e6',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              width: '80%',
              backgroundColor: '#ca8a04',
              zIndex: 10,
              color: '#ffffff',
            }}
          >
            <Text>Advanced</Text>
          </View>
        </View>
      </View>
      <View style={style.container}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Jquery</Text>
          <Text style={{ marginLeft: 4, color: '#6b7280', fontSize: 10 }}>10 years (2021 last used)</Text>
        </View>
        <View
          style={{
            borderRadius: 8,
            width: '100%',
            backgroundColor: '#e6e6e6',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              width: '80%',
              backgroundColor: '#ca8a04',
              zIndex: 10,
              color: '#ffffff',
            }}
          >
            <Text>Advanced</Text>
          </View>
        </View>
      </View>
      <View style={style.container}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Jquery</Text>
          <Text style={{ marginLeft: 4, color: '#6b7280', fontSize: 10 }}>10 years (2021 last used)</Text>
        </View>
        <View
          style={{
            borderRadius: 8,
            width: '100%',
            backgroundColor: '#e6e6e6',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              width: '80%',
              backgroundColor: '#ca8a04',
              zIndex: 10,
              color: '#ffffff',
            }}
          >
            <Text>Advanced</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Skills;
