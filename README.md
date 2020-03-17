# Description

This project contains some code that illustrates how to setup an email queue in a nodejs application using bullJs

## Features
* Users can sign up.

## Requirements and Installation
**Via Cloning The Repository**
```
# Clone the app
git clone https://github.com/vic3king/bulljs-email-setup.git

# Required .env credentials
PORT=3333
NODE_ENV=development
DEV_DATABASE_URL=
REDIS_URL='redis://127.0.0.1:6379'
FRONTEND_APP_URL= e.g localhost:3333

# Switch to directory
cd < cloned directory >
npm install

# Run migrations
npm run migration:reset
npm run seed

#Start the application
npm run start:dev

#View the application
navigate to localhost:3333 to view the application
```


Hosted api can be found [here]()


## API Endpoints
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
    <tr>
      <td>GET</td>
      <td>/</td>
      <td>Welcome screen</td>
  </tr>
   <tr>
    <td>POST</td>
    <td>/v1/auth/register/</td>
    <td>Register a user</td>
  </tr>
</table>