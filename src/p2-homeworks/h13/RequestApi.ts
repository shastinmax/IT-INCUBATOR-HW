import React from 'react';
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const RequestApi = {
    createBody(value: boolean) {
        return instance.post <PostType>('', {success: value})
    }
}

type PostType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}