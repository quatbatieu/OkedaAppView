export const getSearchParamFromURL = (url, param) => {
	const include = url.includes(param);
	if (!include) return null;
	const params = url.split(/([&,?,=])/);
	const index = params.indexOf(param);
	const value = params[index + 2];
	return value;
};

export const getSearchStationsFromURL = (url, param) => {
	const include = url.split("ttdk.com.vn");
	const value = include[1];
	if (value === param) {
		return true;
	}
	return false;
};
export const getTelFromURL = (url, param) => {
	const include = url.split("tel:");
	const value = include[1];
	if (value === param) {
		return true;
	}
	return false;
};
export const getMailFromURL = (url, param) => {
	const include = url.split("mailto:");
	const value = include[1];
	if (value === param) {
		return true;
	}
	return false;
};
