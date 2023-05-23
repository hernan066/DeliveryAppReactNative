import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentation/view/home/Home";
import { OrderList } from "./src/Presentation/view/ordersList/OrderList";

export type RootStackParamList = {
  HomeScreen: undefined;
  OrderListScreen: undefined;
  //RolesScreen: undefined,
  //AdminTabsNavigator: undefined,
  //ClientTabsNavigator: undefined,
  //DeliveryTabsNavigator: undefined,
  //ProfileUpdateScreen: {user: User}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OrderListScreen" component={OrderList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
