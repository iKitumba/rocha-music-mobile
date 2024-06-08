import {
  ChevronLeft,
  CloudDownload,
  Ellipsis,
  UploadCloud,
} from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProfilePage = () => {
  return (
    <View className="flex-1 bg-slate-950">
      <View className="pt-16 px-6 pb-2 flex-row items-center justify-between">
        <TouchableOpacity className="w-10 h-10 bg-slate-800 items-center justify-center rounded-full">
          <ChevronLeft color={"#94A3B8"} size={24} />
        </TouchableOpacity>

        <Text className="text-slate-50 font-medium font-base">_iamafonso</Text>

        <TouchableOpacity className="w-10 h-10 bg-slate-800 items-center justify-center rounded-full">
          <Ellipsis color={"#94A3B8"} size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="justify-center gap-2 items-center pt-12">
          <View className="self-center">
            <LinearGradient
              style={{ padding: 4, borderRadius: 120 }}
              colors={["#E5C4FF", "#7C459C"]}
            >
              <Image
                className="w-28 h-28 rounded-full object-cover"
                source={{
                  uri: "https://mighty.tools/mockmind-api/content/human/64.jpg",
                }}
              />
            </LinearGradient>
          </View>
          <Text className="text-slate-50 text-lg font-bold">
            João Afonso Dono
          </Text>
          <View className="flex-row gap-4">
            <TouchableOpacity className="gap-2 py-1 px-2 bg-slate-800 flex-row items-center rounded-full">
              <Text className="text-base font-bold text-slate-100">1234</Text>
              <CloudDownload size={24} color={"#94A3B8"} />
            </TouchableOpacity>
            <TouchableOpacity className="gap-2 py-1 px-2 bg-slate-800 flex-row items-center rounded-full">
              <Text className="text-base font-bold text-slate-100">1234</Text>
              <UploadCloud size={24} color={"#94A3B8"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePage;
