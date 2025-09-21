import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholderTxt: string;
  onChangeTxt?: (txt: string)=>void;
  onPress?: () => void;
  value?: string;
}

const SearchBar = ({ placeholderTxt, onChangeTxt, onPress, value }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5 ml-2"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput 
      onFocus={onPress}
      onChangeText={onChangeTxt}
      placeholder={placeholderTxt}
      placeholderTextColor={"#a8b5db"}
      value={value}
      // onChangeText={() => {}} 
      className="flex-1 ml-2 text-white" />
    </View>
  );
};

export default SearchBar;

