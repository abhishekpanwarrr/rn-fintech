import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useAssets } from "expo-asset";
import { Link } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  const videoSource = assets ? assets[0].uri : null;
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
    player.muted = true;
    player.keepScreenOnWhilePlaying = true;
  });

  return (
    <View style={styles.container}>
      {assets && (
        <VideoView
          style={[StyleSheet.absoluteFill, styles.video]}
          player={player}
          fullscreenOptions={{ enable: true }}
          nativeControls={false}
        />
      )}
      <SafeAreaView style={styles.overlay}>
        <View style={{ marginTop: 80, padding: 20 }}>
          <Text style={styles.header}>Ready to change the way you money?</Text>
        </View>

        <View style={styles.buttons}>
          <Link
            href={"/login"}
            style={[
              defaultStyles.pillButton,
              { flex: 1, backgroundColor: Colors.dark },
            ]}
            asChild
          >
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
                Log in
              </Text>
            </TouchableOpacity>
          </Link>
          <Link
            href={"/signup"}
            style={[
              defaultStyles.pillButton,
              { flex: 1, backgroundColor: "#fff" },
            ]}
            asChild
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 22, fontWeight: "500" }}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    height: "100%",
    width: "100%",
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});
