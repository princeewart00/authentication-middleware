# Authentication Middleware

This is a simple authentication middleware package for Node.js applications.

## Installation

You can install this package via npm:

```bash
npm install authentication-middleware-sec
```

## Usage

```javascript
const express = require('express');
const AuthenticationMiddleware = require('authentication-middleware-sec');

// Create an instance of AuthenticationMiddleware
const authMiddleware = new AuthenticationMiddleware();

// Register a new user
authMiddleware.register('john', 'password123');

// Create an Express application
const app = express();

// Use the authentication middleware for protected routes
app.use('/protected-route', authMiddleware.middleware);

// Define protected routes
app.get('/protected-route', (req, res) => {
  res.send('You have accessed a protected route.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## API

### `register(username: string, password: string): void`

Registers a new user with the provided username and password.

### `authenticate(username: string, password: string): boolean`

Authenticates the user with the provided username and password. Returns `true` if authentication succeeds, `false` otherwise.

### `middleware(req: Request, res: Response, next: NextFunction): void`

Middleware function to authenticate incoming requests. Checks for username and password in the request headers and validates them using the `authenticate` method. If authentication succeeds, calls the `next` function to proceed with the request; otherwise, sends a 401 Unauthorized response.

## License

This package is open source and available under the [MIT License](LICENSE).
