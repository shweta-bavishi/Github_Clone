import { Platform, StatusBar, Dimensions } from "react-native";

const androidHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const { height, width } = Dimensions.get("window");

const Colors = {
  Primary: "#8651A0",
  Secondary: "#514EA1",
  Background: "#FFFFFF",
  BackgroundText: "#FFFFFF",
  Heading: "#192E44",
  Paragraph: "#b5b6b7",
  Separator: "#E5E5E5",
  Red: "#DD4B38",
  Black: "#000",
  White: "#FFF",
  Green: "#6AD581",
  Grey1: "#595959",
  Grey2: "#B1B1B1",
  GradientHeading: "#FFFFFF",
  GradientImage: "#FFFFFF",
  SwitchBackground: "#EFE8F1",
  SliderBackground: "#EFE8F1",
  Transparent: "transparent",
  GithubPrimary: "#323232",
  GithubSecondary: "#4c4c4c"
};

const Padding = {
  ScreenLeft: 20,
  ScreenRight: 20,
  ScreenLeftSmall: 15,
  ScreenRightSmall: 15
};

const Height = {
  Status: Platform.OS === "ios" ? 20 : androidHeight,
  Header: Platform.OS === "ios" ? 44 : 54,
  TabBar: 54
};

const ButtonRadius = {
  Block: 40,
  Small: 20
};

export { Colors, Padding, Height, ButtonRadius, height, width };
