import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Slideshow from "react-native-image-slider-show";

const dataSource = [
	{
		title: "Panctuality" ,
		caption: "We value your time and hence ,ensure on time departure",
		url: "https://images.unsplash.com/photo-1590922144791-347af7dd9dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
	},
	{
		title: "CONVINIENT",
		caption: "With up-to-date and current bus schedules",
		url: "https://images.unsplash.com/photo-1603521801204-8d9c70dd08c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		title: "Pricing",
		caption: "Save money with unstapable pricing",
		url: "https://images.unsplash.com/photo-1606188521935-278fd50f7a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
];

const ImageSlider = () => {
	const [position, setPosition] = useState(0);

	useEffect(() => {
		const toggle = setInterval(() => {
			setPosition(position === dataSource.length - 1 ? 0 : position + 1);
		}, 3000);

		return () => clearInterval(toggle);
	});

	return (
		<View style={styles.gallery}>
			<Slideshow position={position} dataSource={dataSource} />
		</View>
	);
};

const styles = StyleSheet.create({
	gallery:{
		borderRadius:10,
        width:"100%",
        height:"50%"
	}

});

export default ImageSlider;
