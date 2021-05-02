# NPM

- NPM is not part of node but it comes packaged with node as the default package manager
- NPM can be used to install packages from github
- `npm ls -g --depth=0` list all global npm packages
- `npm update <packageName>` updates a package
- `npm i npm -g` updates npm it self
- `npm outdated` `npm outdated -g` check for outdated packages
- `npm config set save true` make all npm installs use the --save flag by default
- `npm search` search npm registry
- `npm shrikwrap` locks down all the dependencies 
- `npm home lodash` opens the homepage of a package
- `npm home repo` opens repo of a package
- `npm prune` removes packages that are not in package.json