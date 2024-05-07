const { createUser, getUser } = require('../helpers/requestHelper');
//const { initializeEnvironment } = require('../helpers/setupHelper');

describe('User CRUD operations', () => {
  beforeAll(() => {
    require('dotenv').config({ path: './.env' });
    //initializeEnvironment(); // Load environment variables
  });

  let createdUserId;
  const accessToken = process.env.ACCESS_TOKEN;
  console.log("Access Token:", process.env.ACCESS_TOKEN);

  test('Create a user with a valid body should return status code 201', async () => {
    const userData = {
      "name": "Tenali Ramakrishna",
      "gender": "male",
      "email": "tenaliTwo@example.com",
      "status": "active"
    };

    const response = await createUser(accessToken, userData).expect(201);
    createdUserId = response.body.id;

    expect(response.body.name).toBe(userData.name);
    expect(response.body.gender).toBe(userData.gender);
    expect(response.body.email).toBe(userData.email);
    expect(response.body.status).toBe(userData.status);
  });

  test('Retrieve the previously created user should return status code 200', async () => {
    await getUser(accessToken, createdUserId).expect(200);
  });

  test.only('Create a user with an existing email address should return a 422', async () => {
    const userData = {
      "name": "Tenali Ramakrishna",
      "gender": "male",
      "email": "tenaliTwo@example.com",
      "status": "active"
    };

    const response = await createUser(accessToken, userData).expect(422);
    createdUserId = response.body.id;
  });

  // More tests for update and delete
});
