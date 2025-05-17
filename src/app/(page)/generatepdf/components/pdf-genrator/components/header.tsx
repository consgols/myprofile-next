'use client';

import React from 'react';
import { View, Image, StyleSheet } from '@react-pdf/renderer';

const cover = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/assets/images/avensia-cover-new.jpeg`;
const samplePF = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/assets/images/sample-pf.jpg`;

const styles = StyleSheet.create({
  profileImageWrapper: {
    marginLeft: 20,
    marginTop: -50,
  },
  profileImage: {
    height: 100,
    width: 100,
    marginLeft: 5,
    marginBottom: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    objectFit: 'cover',
  },
});

const Header = () => {
  return (
    <View>
      <Image src={cover} />
      <View style={styles.profileImageWrapper}>
        <View>
          <Image style={styles.profileImage} source={samplePF} />
        </View>
      </View>
    </View>
  );
};

export default Header;
