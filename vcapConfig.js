'use strict'

const vcap = process.env.VCAP_SERVICES && JSON.parse(process.env.VCAP_SERVICES);
const vcapCredentials = vcap ? vcap['user-provided'][0].credentials : JSON.parse(process.env.VCAP_CREDENTIALS);

module.exports = {vcapCredentials};