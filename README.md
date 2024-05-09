# Users API Test Suite

This project contains automated tests designed to verify the functionality of the Users API provided by https://gorest.co.in/.
The tests cover both positive and negative scenarios to ensure the reliability and correctness of the API endpoints.

Created with JavaScript, Jest and Supertest.

## Covered test scenarios

- **Create Users**: Tests validating the creation of users with valid data.
- **Create Users**: Tests validating the creation of users with invalid data fails.
- **Read Users**: Tests validating user retrieval operations, including missing or invalid user IDs.
- **Update Users**: Tests updating user details and validate the updated data.
- **Delete Users**: Tests validating delete operations and handle missing or invalid user IDs correctly.

## Prerequisites

- Node.js (project created with node v20.12.2)
- Jest 
- Access to the user management RESTful API

## Getting Started

To get started with this project, follow these steps:

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/avgsoftware/gorest-api-tests.git
   cd path-to-your-project
2. Install npm 
   ```bash
   npm install
3. Run tests
   ```bash
   npm test