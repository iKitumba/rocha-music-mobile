import { ChevronLeft, Ellipsis } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ProfilePage = () => {
  return (
    <View className="flex-1 bg-slate-950">
      <View className="pt-16 px-6 pb-2 flex-row items-center justify-between">
        <TouchableOpacity className="w-10 h-10 bg-slate-800 items-center justify-center rounded-full">
          <ChevronLeft color={"white"} size={24} />
        </TouchableOpacity>

        <Text className="text-slate-50 font-medium font-base">_iamafonso</Text>

        <TouchableOpacity className="w-10 h-10 bg-slate-800 items-center justify-center rounded-full">
          <Ellipsis color={"white"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePage;
