const BASE_URL = 'https://api.valantis.store:41000/';
const md5 = require('md5');
const stringForXAuth = `${md5(('Valantis_' + new Date().getFullYear() + (new Date().getMonth() < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1) + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate())))}`



export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
}
export const getIds = async () => {
    return await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth': stringForXAuth,
        },
        body: JSON.stringify({
            "action": "get_ids",
            "params": { "offset": 0 }
        })
    })
        .then(checkResponse)

};



export const getItems = async (params) => {
    return await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth': stringForXAuth,
        },
        body: JSON.stringify({
            "action": "get_items",
            "params": params
        })
    })
        .then(checkResponse)

};

export const filter = async (params) => {
    return await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth': stringForXAuth,
        },
        body: JSON.stringify({
            "action": "filter",
            "params": params
        })
    })
        .then(checkResponse)
}

export const getFields = async (params) => {
    return await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth': stringForXAuth,
        },
        body: JSON.stringify({
            "action": "get_fields",
            "params": params
        })
    })
        .then(checkResponse)
}