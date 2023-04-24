const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... your other configurations ...

  plugins: [
    // ... your other plugins ...

    new Dotenv()
  ]
};
