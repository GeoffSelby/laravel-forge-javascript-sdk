# Laravel Forge JavaScript SDK

![Travis (.com)](https://img.shields.io/travis/com/GeoffSelby/laravel-forge-javascript-sdk?&style=for-the-badge)
![npm](https://img.shields.io/npm/v/@geoffcodesthings/forge-js?&style=for-the-badge)

A complete, asynchronous Javascript SDK for the Laravel Forge API

## Installation

With yarn (_recommended_):

```bash
yarn add @geoffcodesthings/forge-js
```

With npm:

```bash
npm install @geoffcodesthings/forge-js
```

## Basic Usage

```js
import Forge from '@geoffcodesthings/forge-js';

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

## Documentation

Full documentation can be found [here](https://laravel-forge-js-sdk.netlify.app).

## License

This project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
