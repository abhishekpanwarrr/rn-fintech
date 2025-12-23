import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const PhoneVerify = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();
  console.log("🚀 ~ PhoneVerify ~ phone:", phone);
  return (
    <View>
      <Text>PhoneVerify</Text>
    </View>
  );
};

export default PhoneVerify;
