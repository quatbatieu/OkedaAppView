import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = () => {
    try {
        AsyncStorage.getItem('CountApp')
            .then(value => {
                if (value != null) {
                let countApp = JSON.parse(value);
                }
            })
    } catch (error) {
    }
}
export const setData = async () => {
    if (count == 0) {
        Alert.alert('Warning!', 'Please write your data.')
    } else {
        try {
            var countApp = {
                count: count + 1,
            }
            await AsyncStorage.setItem('CountApp', JSON.stringify(countApp));
        } catch (error) {
        }
    }
}