import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const checkButton = () => {
    // 이메일 검증하는 로직을 만들어야함 regex 이해하기
    navigation.navigate('Certification');
  }

  return (
      <View style={styles.emailContainer}>
        <Text style={styles.text}>
          로그인을 위한{'\n'}이메일을 입력해주세요
        </Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="honggildong123@naver.com"
          style={styles.input}
          autoFocus={true}
        />
        <Button title='확인' onPress={checkButton}/>
      </View>
  );
}
const styles = StyleSheet.create({
  emailContainer: {
    flex: 20,
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 60
  }, 
  text: {
    color: "black",
    fontSize: 25,
    textAlign: "left",
    marginBottom: 20
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "white"
}
});