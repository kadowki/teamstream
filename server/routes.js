'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',         config: require('./controllers/static/angular')},
  {method: 'post',   path: '/register',         config: require('./controllers/users/register')},
  {method: 'post',   path: '/login',            config: require('./controllers/users/login')},
  {method: 'delete', path: '/logout',           config: require('./controllers/users/logout')},
  {method: 'get',    path: '/status',           config: require('./controllers/users/status')},
  {method: 'get',    path: '/projects',         config: require('./controllers/projects/get_projects')},
  {method: 'get',    path: '/projects/{pid}',   config: require('./controllers/projects/get_project')}
];
