import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from "../constants/Colors";
import PlacesListScreen from "../screens/PlacesListScreen";
import MapScreen from "../screens/MapScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    Detail: PlaceDetailScreen,
    Map: MapScreen,
    New: NewPlaceScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.headerTintColor,
    },
  }
);

export default createAppContainer(PlacesNavigator);
