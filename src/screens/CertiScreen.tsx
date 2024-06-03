import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

export default function CertiScreen() {

  const [number, setNumber] = useState<string>('');

  const certiButton = () => {
    if(number.length === 6) {
      // 인증 성공 다음 스크린으로 화면을 이동 시켜야함
      // 기존 이용자와 신규 이용자를 어떻게 나누지
      Alert.alert("인증 완료")
    } else {
      // 인증 실패
      Alert.alert("6자리 인증 번호를 입력해주세요")
    }
  };



  return (
    <View>
      <Text>인증 번호를{'\n'}입력해주세요!</Text>
      <TextInput
        placeholder="123456"
        value={number}
        onChangeText={setNumber}
        //keyboardType=""
      />
      <Button title="확인" onPress={certiButton} />    
    </View>
  );
}