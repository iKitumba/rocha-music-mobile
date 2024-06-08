import { Tabs } from "expo-router";
import { CircleUserRound, CloudUpload, Music4 } from "lucide-react-native";
import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";

const TabsLayout = () => {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: Platform.OS === "ios" ? 90 : 70,
            paddingBottom: 16,
            backgroundColor: "#0F172A",
            borderTopColor: "#0F172A",
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "500",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Music4 size={size} color={"white"} />;
            },
            tabBarLabel: "Músicas",
          }}
        />
        <Tabs.Screen
          name="publish"
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <TouchableOpacity className="w-14 h-14 bg-fuchsia-700 items-center justify-center rounded-full">
                  <CloudUpload size={size} color={"white"} />
                </TouchableOpacity>
              );
            },
            tabBarLabel(props) {
              return null;
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <CircleUserRound size={size} color={"white"} />;
            },
            tabBarLabel: "Meu perfil",
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
