# VS-Debugger

* in VSC menu: Run => Add configuration => node.js
* A launch.js file is created.
* in it change:
 "program": "${workspaceFolder}\\index.js" =>  "program": "./index.js" (the path to the file you want to debug)
* Run and stop debugger - F5, shift + F5
* DEBUG CONSOLE - the same like the console in chrome  
* Mouse hover - you can just hover the variables to see their values
* Watch list
* common uses - debug a problematic point, debug the backend.

# Resources

* [Step by step official guide](https://code.visualstudio.com/docs/editor/debugging)
* https://www.youtube.com/watch?v=2oFKNL7vYV8
* https://rollout.io/blog/debug-node-js-effectively-with-chrome-devtools/
* https://code.visualstudio.com/docs/nodejs/debugging-recipes