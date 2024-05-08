import { BellRing, CloudDownload, LinkIcon, Search } from "lucide-react-native";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
      <ScrollView>
        <View className="gap-3">
          <Text className="text-2xl font-bold text-slate-50 px-8 pt-8">
            As mais baixadas de sempre
          </Text>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            keyExtractor={String}
            contentContainerStyle={{ gap: 12, paddingHorizontal: 32 }}
            renderItem={() => {
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
        <View className="px-6 mt-6">
          <View className="h-12 bg-slate-800 my-6 rounded-full flex-row border-1 border-[rgba(255, 255, 255, 0.11)] justify-between items-center">
            <TextInput
              className="text-base px-4 text-slate-100"
              placeholderTextColor={"#999"}
              placeholder="Pesquisa pela música ou autor"
            />
            <TouchableOpacity className="w-12 h-12 bg-slate-500 rounded-full items-center justify-center">
              <Search size={24} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{ gap: 12, paddingVertical: 24 }}
            scrollEnabled={false}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={() => {
              return (
                <View className="flex-row justify-between items-center px-6 pb-6 border-b border-slate-800">
                  <View className="flex-row gap-3 items-center relative">
                    <Image
                      source={{
                        uri: "https://mighty.tools/mockmind-api/content/cartoon/32.jpg",
                        width: 64,
                        height: 64,
                      }}
                      className="rounded-xl"
                    />
                    <View>
                      <Text className="text-xl font-bold text-slate-50">
                        Baby
                      </Text>
                      <Text className="text-slate-400">
                        Justin Bieber e Ludacris
                      </Text>
                    </View>
                    <TouchableOpacity className="absolute -top-4 -left-4 z-10 bg-fuchsia-900 w-8 h-8 items-center justify-center rounded-lg">
                      <LinkIcon size={16} color={"white"} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity className="flex-row items-center gap-2 bg-slate-800 py-2 px-4 rounded-full">
                    <Text className="text-slate-200">120.003</Text>
                    <CloudDownload size={24} color={"gray"} />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
