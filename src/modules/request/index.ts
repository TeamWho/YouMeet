import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    }
});

const generateHeaders = async (axiosConfig: AxiosRequestConfig = {}) => {
    const token = await AsyncStorage.getItem('JWT_TOKEN');

    return {
        ...(axiosConfig?.headers || {}),
        Authorization: `Bearer ${token}`
    };
};

const get = async (url: string, config: AxiosRequestConfig = {}) => {
    const token = await AsyncStorage.getItem('JWT_TOKEN');
    if (!token) return instance.get(url, config);
    const headers = await generateHeaders(config);
    
    return instance.get(url, { ...config, headers });
};

const post = async (url: string, data: Record<string, any> = {}, config: AxiosRequestConfig = {}) => {
    const token = await AsyncStorage.getItem('JWT_TOKEN');
    if (!token) return instance.post(url, data, config);
    const headers = await generateHeaders(config);
    
    return instance.post(url, data, { ...config, headers });
};

const put = async (url: string, data: Record<string, any> = {}, config: AxiosRequestConfig = {}) => {
    const token = await AsyncStorage.getItem('JWT_TOKEN');
    if (!token) return instance.put(url, data, config);
    const headers = await generateHeaders(config);
    
    return instance.put(url, data, { ...config, headers });
};

const remove = async (url: string, config: AxiosRequestConfig = {}) => {
    const token = await AsyncStorage.getItem('JWT_TOKEN');
    if (!token) return instance.delete(url, config);
    const headers = await generateHeaders(config);
    
    return instance.delete(url, { ...config, headers });
};

const request = { get, post, put, delete: remove }; 

export default request;

