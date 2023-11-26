import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
	},
	header: {
		padding: 15,
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: "#fff",
		borderBottomWidth: 2,
		borderColor: "#0c42bc",
	},
	headerTitle: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#0c42bc",
	},
	headerLeft: {
		flex: 1,
	},
	headerLeftTitle: {
		width: 40,
		height: 40,
		color: "#0c42bc",
	},
	headerRight: {
		flex: 1,
	},
	networkContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	networkTitle: {
		fontSize: 20,
		paddingHorizontal: 20,
		textAlign: "center",
	},
});
