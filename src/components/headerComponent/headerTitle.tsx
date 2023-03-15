import { View, Text, StyleSheet } from 'react-native';

interface Props {
    text?: string
}

const TitleView = ({ text = '' }: Props) => {
  return (
    <View>
      <Text style={styles.title}>
                UserName
        {text}
      </Text>
    </View>
  );
};

export default TitleView;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#fff',
  },
});