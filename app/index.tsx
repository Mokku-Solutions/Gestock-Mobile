import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<View>
				<TextInput placeholder="Your course goal!"></TextInput>
				<Button title="Add Goal!"></Button>
			</View>
			<View>
				<Text
					style={{
						margin: 16,
						borderWidth: 2,
						borderColor: "red",
						padding: 16,
					}}
				>
					Gestock!
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
