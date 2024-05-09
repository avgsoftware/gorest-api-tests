const accessToken = '187fc2489328cb26367c69dd49b1a396726ad5c81b883c8dd517f4474a0816c3';

let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);

const createUserWithValidData = {
    "name": "Test user one",
    "gender": "male",
    "email": uniqueId + "Quatt_API@example.com",
    "status": "active"
};

const createUserWithUnknownGender = {
    "name": "Test user two",
    "gender": "unknown",
    "email": uniqueId + "Quatt_API@example.com",
    "status": "active"
};

const createUserWithInvalidEmail = {
    "name": "Test user three",
    "gender": "male",
    "email": uniqueId + "Quatt_APIexample.com",
    "status": "active"
};

const createUserWithInvalidStatus = {
    "name": "Test user four",
    "gender": "male",
    "email": uniqueId + "Quatt_API@example.com",
    "status": "unknown"
};

const createUserWithEmptyBody = {
}

module.exports = {
    accessToken,
    createUserWithValidData,
    createUserWithUnknownGender,
    createUserWithInvalidEmail,
    createUserWithInvalidStatus,
    createUserWithEmptyBody
};