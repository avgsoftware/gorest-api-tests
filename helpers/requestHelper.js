const request = require('supertest');
const BASE_URL = 'https://gorest.co.in/public/v2';

function createUser(accessToken, userData) {
    return request(BASE_URL)
        .post('/users')
        //.set('Accept', 'application/json')
        //.set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${accessToken}`)
        .send(userData);
}

function getUser(accessToken, userId) {
    return request(BASE_URL)
        .get(`/users/${userId}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${accessToken}`);
}

function patchUser(accessToken, userId) {
    return request(BASE_URL)
        .get(`/users/${userId}`)
        .set('Accept', 'application/json')
        .set('Authorization:', `Bearer ${accessToken}`);
}

function deleteUser(accessToken, userId) {
    return request(BASE_URL)
        .get(`/users/${userId}`)
        .set('Accept', 'application/json')
        .set('Authorization:', `Bearer ${accessToken}`);
}

module.exports = {
    createUser,
    getUser,
    patchUser,
    deleteUser
};
