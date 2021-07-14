# Fellows-Backend
This is the basic template of Backend Server using NodeJS and Express connected with MongoDB. 

## Steps to set-up
1. Clone the Repository
2. In your local system, open terminal at that location and run ``` yarn install ```.
3. Cd into the ``` packages/backend ``` folder.
4. Add .env file inside the folder along with other files using below structure.
    ```
    PORT=5000
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<SecretString you want to have>
    JWT_EXPIRES_IN=7d
    JWT_COOKIE_EXPIRE=7d

    ```
5. Run ``` yarn run start ```
6. You are ready to use this now. Just add API's alike the User folder inside API folder and connect route at server.js .

