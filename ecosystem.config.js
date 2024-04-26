module.exports = {
    apps: [
      {
        name: 'socket',
        port: '3000',
        exec_mode: 'cluster',
        instances: '4',
        script: 'server.js'
      },
    ],
  }
  