import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        if(navigation.canGoBack()){
            navigation.goBack();
        } else {
            console.warn('뒤로갈 수 없습니다');
        }
    };

    return(
        <TouchableOpacity onPress ={handlePress} style={styles.backButton}>
            <Icon name="arrow-back" size={15} color="black" />
        </TouchableOpacity>
    );
};

export default BackButton;