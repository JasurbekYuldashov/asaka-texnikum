module.exports = {
  apps: [
    {
      name: 'asaka-client',
      cwd: './client',
      script: 'npm',
      args: 'start -p 3010',
      env_file: './client/.env',
      env: {
        NODE_ENV: 'production'
      },
      watch: false,
      instances: 1,
      autorestart: true
    },
    {
      name: 'asaka-server',
      cwd: './server',
      script: 'server.js',
      env_file: './server/.env',
      env: {
        NODE_ENV: 'production'
      },
      watch: false,
      instances: 1,
      autorestart: true
    }
  ]
};
