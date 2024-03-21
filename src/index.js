// authenticationMiddleware.js

class AuthenticationMiddleware {
    constructor() {
      // Initialize with empty user database
      this.users = [];
    }
  
    // Method to register a new user
    register(username, password) {
      const newUser = { username, password };
      this.users.push(newUser);
      console.log(`User '${username}' registered successfully.`);
    }
  
    // Method to authenticate user credentials
    authenticate(username, password) {
      const user = this.users.find(user => user.username === username && user.password === password);
      if (user) {
        console.log(`User '${username}' authenticated successfully.`);
        return true;
      } else {
        console.log(`Authentication failed for user '${username}'.`);
        return false;
      }
    }
  
    // Middleware function to authenticate incoming requests
    middleware(req, res, next) {
      const { username, password } = req.headers;
      if (!username || !password) {
        res.status(401).json({ message: 'Username and password are required.' });
      } else if (this.authenticate(username, password)) {
        next();
      } else {
        res.status(401).json({ message: 'Invalid credentials.' });
      }
    }
  }
  
  module.exports = AuthenticationMiddleware;
  