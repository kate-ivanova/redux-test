const path = require('path');

module.exports = {
  'images': path.join(__dirname, '../app/images'),
  'files': path.join(__dirname, '../app/files'),
  'fonts': path.join(__dirname, '../app/fonts'),
  'utils': path.join(__dirname, '../app/scripts/utils'),
  'packages': path.join(__dirname, '../app/scripts/packages'),
  'common': path.join(__dirname, '../app/scripts/common'),
  'actions': path.join(__dirname, '../app/scripts/actions'),
  'components': path.join(__dirname, '../app/scripts/components'),
  'containers': path.join(__dirname, '../app/scripts/containers'),
  'reducers': path.join(__dirname, '../app/scripts/reducers'),
  'backbone-mixin': 'backbone-mixin/build/backbone-mixin',
  // 'jquery': path.join(__dirname, 'node_modules/jquery/dist/jquery'),
  'epoxy': 'backbone.epoxy',
  'underscore': 'lodash',
  'bootstrap': path.join(__dirname, '../node_modules/bootstrap/dist/js/bootstrap'),
  'simple-blocks': 'simple-blocks/dist/simpleblocks',
};
