# Binary Search vs find()

Upon the Harvard University CS50 lessons, I wanted to check performance difference between find() method and
binary search.

Usage of test is pretty simple.
 
---
## Requirements

For test, you will need only Node.js installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.16.3

    $ npm --version
    6.14.4

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


### Array Generator
- ### Generating a dynamic length array

	You can create your own array, with any length, any min and max point you desire to create.
    Default length: 40
    Default min value: 0
    Default max value: 40

    `for (var a=[],i=0;i<40; i++) a[i]=i;`


## Install

    From terminal: 

    $ git clone https://github.com/Muratcol/binary-search-vs-default-search.git
    $ cd binary-search-vs-default-search
    


## Running the project

    $ node binarySearch

