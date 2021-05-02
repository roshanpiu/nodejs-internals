# Wrapping and Caching Modules

- Before compiling the module Node wraps the module in a function
- require('module).wrapper
- This function wrapping is what keeps top level variables scoped to that module
- require function takes module name or a path and returns the exports object

if(require.main === module) {
    // Running as a script
    print(process.argv[2], process.argv[3])
} else {
    // Being required
    module.exports = print;
}
