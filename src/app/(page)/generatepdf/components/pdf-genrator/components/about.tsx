'use client';

import { View, Text } from '@react-pdf/renderer';

interface PropsType {
  aboutMe?: string;
}

const About = ({ aboutMe }: PropsType) => {
  return <View>{!!aboutMe && <Text>{aboutMe}</Text>}</View>;
};

export default About;
