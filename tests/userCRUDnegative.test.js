const { createUser, getUser, updateUser, deleteUser } = require('../helpers/requestHelper');
const { accessToken, createUserWithValidData, createUserWithUnknownGender, createUserWithInvalidEmail, createUserWithInvalidStatus } = require('../utils/constants');

let createdUserId;
let createdUserEmail;

const missingUserId = 70000000;
const invalidUserId = "invalidUserId";
const invalidAccessToken = "noValidToken";

const createUserWithExistingEmail = {
    "name": "x 1 Ramakrishna",
    "gender": "male",
    "email": createdUserEmail,
    "status": "active"
};

test('CREATE a user with an invalid access token should return status code 401', async () => {

    createUser(invalidAccessToken, createUserWithInvalidEmail).expect(401);
});

test('CREATE a user with an invalid email address should return status code 422', async () => {

    createUser(accessToken, createUserWithInvalidEmail).expect(422);
});

test('CREATE a user with an unknown gender should return status code 422', async () => {

    createUser(accessToken, createUserWithUnknownGender).expect(422);
});

test('CREATE a user with an invalid status should return status code 422', async () => {

    createUser(accessToken, createUserWithInvalidStatus).expect(422);
});

test('CREATE a user with valid data should return status code 201', async () => {

    const createUserResponse = await createUser(accessToken, createUserWithValidData).expect(201);
    createdUserEmail = createUserResponse.body.email;
});

test('CREATE a user with an existing email address should return status code 422', async () => {

    createUser(accessToken, createUserWithExistingEmail).expect(422);
});

test('READ a missing user should return status code 404', async () => {

    getUser(accessToken, missingUserId).expect(404);
});

test('READ a user with an invalid Id should return status code 404', async () => {

    getUser(accessToken, invalidUserId).expect(404);
});

test('DELETE a missing user should return status code 404', async () => {

    deleteUser(accessToken, missingUserId).expect(404);
});

test('DELETE a user with an invalid Id should return status code 404', async () => {

    deleteUser(accessToken, invalidUserId).expect(404);
});
