const { createUser, getUser, updateUser, deleteUser } = require('../helpers/requestHelper');
const { accessToken } = require('../utils/constants');
const { createUserWithValidData } = require('../utils/constants');

let createdUserId;

test('CREATE a user with valid data should return status code 201', async () => {

  const createUserResponse = await createUser(accessToken, createUserWithValidData).expect(201);
  createdUserId = createUserResponse.body.id;

  expect(createUserResponse.body.name).toBe(createUserWithValidData.name);
  expect(createUserResponse.body.gender).toBe(createUserWithValidData.gender);
  expect(createUserResponse.body.email).toBe(createUserWithValidData.email);
  expect(createUserResponse.body.status).toBe(createUserWithValidData.status);
});

test('CREATE and READ the user should return status codes 201 & 200', async () => {

  await deleteUser(accessToken, createdUserId);

  const createUserResponse = await createUser(accessToken, createUserWithValidData).expect(201);
  createdUserId = createUserResponse.body.id;

  await getUser(accessToken, createdUserId).expect(200);
});

test('CREATE and UPDATE the user should return status codes 201 & 200', async () => {

  await deleteUser(accessToken, createdUserId);

  const createUserResponse = await createUser(accessToken, createUserWithValidData).expect(201);
  createdUserId = createUserResponse.body.id;

  const updateUserRequestData = {
    "name": "Updated username",
    "gender": "female",
    "status": "inactive"
  };

  const updatedUserResponse = await updateUser(accessToken, createdUserId, updateUserRequestData).expect(200);

  expect(updatedUserResponse.body.name).toBe(updateUserRequestData.name);
  expect(updatedUserResponse.body.gender).toBe(updateUserRequestData.gender);
  expect(updatedUserResponse.body.email).toBe(createUserResponse.body.email);
  expect(updatedUserResponse.body.status).toBe(updateUserRequestData.status);
});
