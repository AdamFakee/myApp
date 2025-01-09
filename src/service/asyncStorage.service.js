import AsyncStorage from '@react-native-async-storage/async-storage';

const createObjectData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // saving error
    }
};

const getObjectData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        console.log(jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
    // error reading value
    }
};

const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch(e) {
        // remove error
    }

    console.log('Done.')
}

export const asyncStorageService = {
    createObjectData, getObjectData, removeData
}