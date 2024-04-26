module.exports = {
    apps: [
      {
        name: 'socket',
        port: '3000',
        exec_mode: 'cluster',
        instances: '1',
        script: 'server.js'
      },
    ],
  }
  