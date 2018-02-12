const { execSync } = require('child_process');
const { rename } = require('fs');

const release = () => {
  execSync('yarn run styleguide:build');
  execSync('yarn run build');
  rename('./styleguide', 'docs/styleguide', err => {
    if (err) {
      console.error(error);
    } else {
      console.log('completed');
    }
  });
};

release();
