import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { COLOR_PALETTE } from "../../../helpers/Constants";

const NavigatorTabButton = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            style={{
              flex: 1,
              backgroundColor: COLOR_PALETTE.white,
              justifyContent: "space-around",
              flexDirection: "row",
              borderTopWidth: 1,
              borderTopColor: COLOR_PALETTE.darkGray,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                height: 90,
                borderTopWidth: 3,
                borderColor: isFocused ? COLOR_PALETTE.primary : "transparent",
                width: "70%",
              }}
            >
              <TouchableWithoutFeedback
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <Text
                  style={{
                    color: isFocused
                      ? COLOR_PALETTE.primary
                      : COLOR_PALETTE.secondary,
                    fontSize: 16,
                    fontWeight: "700",
                    paddingTop: 10,
                  }}
                >
                  {label}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default NavigatorTabButton;
