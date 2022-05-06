import { TextStyle } from "react-native";

const size = {
  default: 14,
  xs: 10,
  s: 12,
  md: 14,
  lg: 20,
  xlg: 24,
};

const weight: { [key: string]: TextStyle["fontWeight"] } = {
  full: "900",
  bold: "bold",
  normal: "normal",
  thin: "400",
  semi: "600",
};

export default { size, weight };
