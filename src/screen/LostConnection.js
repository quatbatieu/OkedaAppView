import React from "react";
import { View, Text } from "react-native";
const LostConnection = () => {
	return (
		<View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
			<View>
				<Text style={{ fontSize: 14 }}>
					Vui lòng mở internet để tiếp tục sử dụng ứng dụng.
				</Text>
			</View>
		</View>
	);
};
export default LostConnection;
