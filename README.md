# env-example
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple package that generates a pre-filled `.env.example` according to your `.env` configuration.

### Get Started
You may choose to do one of the following:

Run the script without installation:
```sh
npx env-example
```

Install package globally and execute as local command:
```sh
npm install -g env-example
```
```sh
yarn global add env-example
```

### How it Works
This searches for a `.env` file in your current working directory. It returns an error if it is not able to find one.

#### Example

Expects `.env` file:
```
# Email Client
CLIENT_ID=1234567789
CLIENT_SECRET=GANSR_mnH241MNabnsHQO82mBc
REDIRECT_URI=https://example.com

# X Account Details
X_ACCOUNT_SID=oq9mfxtg4n1j4yvu13
X_AUTH_TOKEN=e0bp3y3cphqxamm87p
```

Returns a `.env.example` file in the same directory with dummy values:
```
# Email Client
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URI=

# X Account Details
X_ACCOUNT_SID=
X_AUTH_TOKEN=
```