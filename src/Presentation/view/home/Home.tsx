import { Text, TextInput, Image, View, StyleSheet } from "react-native";
import { RoundedButton } from "../../components/RondedButton";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/logo.jpeg")}
        style={styles.imageBack}
      />
      <View style={styles.loginForm}>
        <Text style={styles.title}>Ingresar</Text>
        <View style={styles.textInputContainer}>
          <Image
            source={require("../../../../assets/user.png")}
            style={styles.iconImage}
          />
          <TextInput style={styles.textInput} placeholder="Ingresa tu correo" />
        </View>
        <View style={styles.textInputContainer}>
          <Image
            source={require("../../../../assets/password.png")}
            style={styles.iconImage}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu contraseña"
          />
        </View>
        <RoundedButton
          text={"ENVIAR"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4136",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  imageBack: {
    width: "100%",
    height: "70%",
    position: "relative",
    top: -130,
  },
  loginForm: {
    position: "absolute",
    width: "100%",
    height: "38%",
    backgroundColor: "#fff",
    bottom: 0,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },
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
