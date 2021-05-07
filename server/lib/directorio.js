const config = require('./config');
const log = require('./log');
const util = require('util');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const csrf = require('csurf');
const bodyParser = require('body-parser');

const users = require('../models/users');
const { nodeifyFunction, nodeifyPromise } = require('./nodeify');
const interoperableErrors = require('../../shared/interoperable-errors');
const contextHelpers = require('./context-helpers');

const request = require('request-promise');
//const _ = require('lodash');

module.exports.authorize = async function(user) {
  return request ({
	  uri: config.directorio.url+'/obtener.json?uid='+user.username+'&modelo=permisos&aplicacion='+config.directorio.app_id,
	  json: true
  }).then(function(permisos) {
    log.info('directorio', JSON.stringify(permisos));
    log.info('directorio', JSON.stringify(user));
    //log.info('directorio', JSON.strinfigy(config.directorio.objetos));
    //const todoNamespace = _.takeWhile(permisos, ['objeto', 'todo']);
    //log.info('directorio', JSON.stringify(todoNamespace));
  });
}
