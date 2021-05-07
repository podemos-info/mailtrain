
const knex = require('knex');
const path = require('path');

const transformer = require('knex-csv-transformer').transformer;
const transfomerHeader = require('knex-csv-transformer').transfomerHeader;

exports.seed = transformer.seed({
  table: 'namespaces',
  file: path.join(__dirname, 'csv/comunidades.tsv'),
  parser: {
    delimiter: '\t',
    quote: '"',
    escape: '\\',
    skip_empty_lines: true,
    auto_parse: true/*,
    columns: true*/
  },
  transformers: [
    transfomerHeader('name', 'name', {}),
    transfomerHeader('namespace', 'namespace', {
      lookUp: {
        table: 'namespaces',
        column: 'name',
        scalar: 'id',
        createIfNotExists: false,
	createIfNotEqual: (value) => false
      }
    })
  ]
});

/*
exports.seed = function(knex, Promise) {

  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
  
};
*/
