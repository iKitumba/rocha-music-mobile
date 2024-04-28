import { BellRing, CloudDownload } from "lucide-react-native";
import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const HomePage = () => {
  return (
    <View className="flex-1 bg-slate-950">
      <StatusBar backgroundColor={"#020617"} barStyle="light-content" />

      <View className="flex-row items-center justify-between px-8 pb-3 pt-16">
        <View className="flex-row flex-1 items-center gap-2">
          <Image
            className="w-14 h-14 rounded-full"
            source={require("@/assets/profile.jpg")}
          />
          <View>
            <Text className="text-base font-bold text-white">João Afonso</Text>
            <Text className="text-sm text-white">Seja bem vindo</Text>
          </View>
        </View>
        <TouchableOpacity className="flex-row gap-2 items-center px-2 py-1 rounded-full bg-fuchsia-900">
          <Text className="text-base text-fuchsia-100 font-bold">10</Text>
          <BellRing size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="gap-3">
        <Text className="text-2xl font-bold text-slate-50 px-8 pt-8">
          As mais baixadas de sempre
        </Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={String}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 32 }}
          renderItem={({ item }) => {
            return (
              <View className="gap-3">
                <Image
                  source={require("@/assets/cardib.jpeg")}
                  className="h-52 aspect-video rounded-2xl object-cover"
                  style={{ objectFit: "cover" }}
                />
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-base font-bold color-white">
                      Enough (Miami)
                    </Text>
                    <Text className="text-sm text-slate-400">Cardi B</Text>
                  </View>
                  <TouchableOpacity className="gap-2 py-1 px-2 bg-slate-800 flex-row items-center rounded-full">
                    <Text className="text-base font-bold text-slate-100">
                      1234
                    </Text>
                    <CloudDownload size={24} color={"gray"} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          horizontal
        />
      </View>
    </View>
  );
};

export default HomePage;
