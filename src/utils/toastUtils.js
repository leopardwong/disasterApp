import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";

export const toastConfig = {
    disasterToast: ({ text1, text2, onPress, props }) => {
        return (
            <TouchableNativeFeedback onPress={onPress}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFC107",
                        borderRadius: 8,
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                    }}
                >
                    <View
                        style={{
                            borderRadius: 8,
                            backgroundColor: "#fff",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 4,
                            marginRight: 16,
                            aspectRatio: 1,
                        }}
                    >
                        <Text style={{ fontSize: 48 }}>⚠️</Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#333",
                            }}
                        >
                            {text1}
                        </Text>
                        <Text style={{ fontSize: 14, color: "#666" }}>
                            {text2}
                        </Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    },
};
