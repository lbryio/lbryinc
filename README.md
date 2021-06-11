# lbryinc
lbryinc is a module which contains common api.lbry.io and rewards code shared between lbry-desktop and lbry-android.

## Installation
Add `lbryinc` as a dependency to your `package.json` file.
`"lbryinc": "lbryio/lbryinc"`

### Local development
If you intend to make changes to the module and test immediately, you can use `npm link` to add the package to your `node_modules` folder. This will create a symlink to the folder where `lbry-redux` was cloned to.
```
cd lbryinc
yarn link
cd /<path>/<to>/<project> (ex: cd ~/lbry-desktop)
yarn link lbryinc
````

### Build
Run `$ yarn build`. If the symlink does not work, just build the file and move the `bundle.js` file in to the `node_modules/` folder.

### Automatic rebuild
To have the code automatically rebuild upon changes you can run `$ yarn dev` which will use `rollup` to watch the files and build upon detection of updated source code.

## License

[MIT © LBRY](LICENSE)
