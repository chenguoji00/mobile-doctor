'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/hyjapi"',
  // BASE_API: '"http://192.168.250.180:8081/acc"',
})
