import { Text, Image, View, StyleSheet, ToastAndroid } from "react-native";
import { RoundedButton } from "../../components/RondedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import { useEffect } from "react";

export const HomeScreen = () => {
  const { email, password, onChange, errorMessage, login } = useViewModel();

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  /* useEffect(() => {      
    if (user?.id !== null && user?.id !== undefined && user?.id !== '') {
        
        registerForPushNotificationsAsync().then(token => {

            console.log('TOKEN: ' + token);

            updateNotificationToken(user?.id!, token!);

            if (user.roles?.length! > 1) {
                navigation.replace('RolesScreen');
            }
            else {
                navigation.replace('ClientTabsNavigator');
            }

        });

        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }
}, [user]) */

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/logo.jpeg")}
        style={styles.imageBack}
      />
      <View style={styles.loginForm}>
        <Text style={styles.title}>Ingresar</Text>

        <CustomTextInput
          image={require("../../../../assets/user.png")}
          placeholder="Ingresa tu correo"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}
        />
        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Ingresa tu contraseña"
          keyboardType="default"
          property="password"
          secureTextEntry={true}
          onChangeText={onChange}
          value={password}
        />
        <RoundedButton text={"ENVIAR"} onPress={() => login()} />
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
    height: 300,
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
});
