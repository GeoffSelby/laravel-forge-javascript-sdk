# Forge JavaScript SDK

<p>
    <a href="https://travis-ci.org/GeoffSelby/nevexo-forge-javascript-sdk"><img src="https://travis-ci.com/GeoffSelby/nevexo-forge-javascript-sdk.svg?branch=master" alt="Build Status"></a>
</p>

A complete, promise-based Javascript SDK for the Laravel Forge API

## Installation

With yarn (_recommended_):

```bash
yarn add nevexo-forge-js
```

With npm:

```bash
npm install nevexo-forge-js
```

## Basic Usage

```js
import Forge from 'nevexo-forge-js';

// Instantiate the SDK
const forge = new Forge('API_TOKEN_HERE');

// List all servers
try {
  const servers = await forge.servers.list();
  console.log(servers);
} catch (error) {
  console.log(error);
}
```

> The SDK utilizes native ES6 promises so you should use async/await to handle the resolved promise. You can, of course, use `.then()` and `.catch()` if you prefer.

## Documentation

Full documentation coming soon. Until then, please see the tests for more detailed usage.

## License

This project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
