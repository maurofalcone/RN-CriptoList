import React from "react";
import { SvgCss } from "react-native-svg";
import { View } from "react-native";

const xml = `<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.7071 0.29289C6.0976 0.68342 6.0976 1.31658 5.7071 1.70711L2.41421 5L5.7071 8.2929C6.0976 8.6834 6.0976 9.3166 5.7071 9.7071C5.3166 10.0976 4.6834 10.0976 4.2929 9.7071L0.29289 5.7071C-0.09763 5.3166 -0.09763 4.68342 0.29289 4.29289L4.2929 0.29289C4.6834 -0.09763 5.3166 -0.09763 5.7071 0.29289Z" fill="#019FB5"/>
</svg>
`;

const HeaderGoBackButton = () => {
  return (
    <View style={{ padding: 7 }}>
      <SvgCss xml={xml} width={6} height={10} />
    </View>
  );
};

export default HeaderGoBackButton;
