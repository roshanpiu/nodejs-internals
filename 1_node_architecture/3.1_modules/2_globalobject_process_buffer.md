# Global Object, Process and Buffer

- The one and only true global object in Node is called global
- even if we declare a top level variable in a js file that variable in local to the js file. We can't access that variable in other files even after requiring that module
- adding variables into global object (this is considered a bad practice)
    `global.answer = 42;`

- Two of the most important things in global modules in the process object and the buffer object

## process object
provides a bridge between a node application and it's running environment

- `process.versions` lists down node version and it's dependencies

- `process.env` exposes a copy of the user environment 
If we modify the process.env we won't be modifying the actual user environment

- We shouldn't read directly from process.env we should put it behind a settings or a config module and read from that module

    `export const config = {
        port: process.env.PORT || 8080
    }`

- `node -p "process.release.lts"` will contain the lts label of the used node release. it will be undefined if the currently used node release is not lts. We can check this label and show a Warning if a application is started in production on a non lts node
  
- We can the standard streams `stdout`, `stderr`, `stdin` in the process module to communicate with the running environment. we can not close these streams

- Buffer class in Node global Object is heavily used to deal with binary streams of data

- Buffer is a chunk of memory allocated outside of the v8 heap. we can put some data in that memory. that data can be interpreted in one of many ways depending on the length of a character
- When there is a Buffer there is a character encoding because what ever we place in the Buffer does not have a character encoding. so when reading it we need to specify an encoding.
- When we read content from sockets or files, If we don't specify an encoding we get back a buffer object
- Buffer is a lower level data structure which represents a sequence of binary data. unlike arrays once buffer is allocated it can not be resized
- Buffers are useful when we need to read things like an image file from a TCP stream or a compressed file or any other form of binary data access
- When converting streams of binary data we should use the String Decoder module because it handles multi byte characters much better