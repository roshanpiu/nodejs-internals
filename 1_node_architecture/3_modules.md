# How require Actually Works

- Modularity is a first class concept in Node
- There are 2 core modules involved 

    1. require function available in global object
    2. module which required to manage the things we require with require function

- Require modules steps which Node goes through to load a module

    1. Resolving (Finding the absolute file path of a module)
    2. Loading (Is determined by the content of the file at the resolved path)
    3. Wrapping (Gives every module it's private scope and makes require local to every module)
    4. Evaluating (What VM eventually does with the code)
    5. Caching (Caching to make sure when we require this module again we don't go through all of the above steps again)

- When we require a module node will start from the current directory and will go up all the way to the root directory if it can't find the module. it will throw Cannot find module error
- Core node modules are an exception here require step returns immediately for the core modules
- `require.resolve('find-me')` resolve a module without executing it. if it can't find the module this will throw an error
- modules don't have to be files 
  
    ex - find-me/index.js

- package.json can be used to change the module start location
    `{
        "name": "find-me",
        "main": "start.js"
    }`

- modules can be loaded with a relative path and absolute path
- in any module exports is an special object anything that we put under the exports we will get when we require the module