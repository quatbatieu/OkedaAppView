const URL = "https://api.ttdkapi.ttdk.com.vn";
export const updateInfoUser = ({ tokenWeb, tokenfcm, deviceModel }) => {
	fetch(URL + "/AppUsers/user/updateInfoUser", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${tokenWeb}`,
		},
		body: JSON.stringify({
			data: {
				firebaseToken: `${tokenfcm}`,
				deviceModel,
			},
		}),
	});
};

export const addUserDevice = (tokenWeb, data) => {
	console.log(URL + "/AppUsers/user/addUserDevice", data, tokenWeb);
	fetch(URL + "/AppUsers/user/addUserDevice", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${tokenWeb}`,
		},
		body: JSON.stringify(data),
	}).then((result) => console.log(result, data, tokenWeb));
};
