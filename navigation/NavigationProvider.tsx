import { NavigationContainer } from "@react-navigation/native";

const NavigationProvider = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default NavigationProvider;
