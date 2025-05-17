import { View, Text, StyleSheet } from '@react-pdf/renderer';

const style = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    marginTop: 10,
  },
});

const Name = () => {
  return (
    <View>
      <Text style={style.name}>Consorcio Golosino Jr.</Text>
      <Text style={style.role}>Sr. Frontend Developer at Avensia Philippines, Inc.</Text>
    </View>
  );
};

export default Name;
