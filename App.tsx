import { Image, StyleSheet, Text, View } from "react-native";

import Entypo from "react-native-vector-icons/Entypo";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";

import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const App = () => {
  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Asad Komi</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* content */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        style={styles.image}
      />

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={"hearto"}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: "auto" }}
            color={colors.black}
          />
        </View>

        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>asadkomi</Text> and{" "}
          <Text style={styles.bold}>66 others </Text>
        </Text>

        {/* Post Description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>asadkomi</Text>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
        {/* Comments */}
        <Text style={{ color: colors.lightgrey }}>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>asadkomi</Text> is simply dummy text of
            the printing and typesetting industry.
          </Text>
          <AntDesign name={"hearto"} style={styles.icon} color={colors.black} />
        </View>
        {/* Posted date */}
        <Text style={{ color: colors.lightgrey }}>19 December, 2021</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },

  footer: {
    padding: 10,
  },

  iconContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});

export default App;
