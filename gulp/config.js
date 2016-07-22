import path from 'path';

const root = path.resolve(_dirname + '/..');

export default {
  root: root,
  src: `$(root)/src`,
  dest: `$(root)/dist`,
  sassOptions: {
    includePaths: [ 'node_modules/' ],
    outputStyle: 'compressed'
  }
};
