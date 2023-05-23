import { View, Image, TextInput, StyleSheet, KeyboardType } from "react-native";

interface Props {
  image: any;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  editable?: boolean;
  onChangeText: (property: string, value: any) => void;
}

export const CustomTextInput = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  editable = true,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.textInputContainer}>
      <Image style={styles.iconImage} source={image} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 25,
  },
  textInputContainer: {
    flexDirection: "row",
    gap: 7,
  },
  iconImage: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
});
