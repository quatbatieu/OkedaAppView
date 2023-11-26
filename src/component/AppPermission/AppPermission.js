import { check, request, PERMISSIONS, RESULTS, openSettings } from "react-native-permissions";
import { Platform, Alert } from "react-native";

const PLATFORM_PHOTO_PERMISSIONS = {
	ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
	android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};

const PLAFORM_CAMERA_PERMISSIONS = {
	ios: PERMISSIONS.IOS.CAMERA,
	android: PERMISSIONS.ANDROID.CAMERA,
};

const PLAFORM_LOCATION_PERMISSIONS = {
	ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
	android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
};

const REQUEST_PERMISSION_TYPE = {
	photo: PLATFORM_PHOTO_PERMISSIONS,
	camera: PLAFORM_CAMERA_PERMISSIONS,
	location: PLAFORM_LOCATION_PERMISSIONS,
};

export const PERMISSIONS_TYPE = {
	photo: "photo",
	camera: "camera",
	location: "location",
};

export const checkPermission = async (type) => {
	const permission = REQUEST_PERMISSION_TYPE[type][Platform.OS];
	if (!permission) {
		return true;
	}
	try {
		const result = await check(permission);
		if (result === RESULTS.GRANTED) return true;
		return requestPermission(permission); //request permission
	} catch (error) {
		return false;
	}
};

export const requestPermission = async (permissions) => {
	try {
		const result = await check(permissions);
		if (result === RESULTS.GRANTED) {
			return true;
		} else if (result === RESULTS.DENIED) {
			// requestSetting();
			return false;
		} else {
			// requestSetting();
			return false;
		}
	} catch (error) {
		return false;
	}
};

function requestSetting() {
	Alert.alert(
		"TTDK",
		"Vui lòng cho phép quyền truy cập camera và thư viện ảnh trong cài đặt thiết bị.",
		[
			{ text: "Vào cài đặt", onPress: () => openSettings() },
			{ text: "Huỷ bỏ", onPress: () => null },
		],
		{ cancelable: false },
	);
}

export const requestMultiplePermissions = async (types) => {
	const results = [];
	for (const type of types) {
		const permission = REQUEST_PERMISSION_TYPE[type][Platform.OS];
		if (permission) {
			const result = await requestPermission(permission);
			results.push(result);
		}
	}
	for (const result of results) {
		if (!result) {
			return false;
		}
	}
	return true;
};
