'use strict';

const server = require('../server');
const ds = server.dataSources.db;

var lbTables = [
  'User',
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role',
  'Todos',
  'Categories',
];

ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log(`Loopback tables ['${lbTables}] created in `, ds.adapter.name);
  ds.disconnect();
});
