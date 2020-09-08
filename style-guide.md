# Style Guide
Here is the guide to editing and adding to the Repo.  
The yellow words and boxes are MarkDown code snippets demonstrating how to write and edits different elements.
* There is a useful option in VSC to preview your .md page as you work. you should be able to see it at the top-right of your workspace.try using ctrl+K V.
## Here You'll Find
* [Basic MarkDown Syntax](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)
A guide to Basic markdown used in this page.

* [Structure](#structure)
An explanation of the Repo's intended structure.

* [README](#readme)
Rules to follow when adding or editing a README file.

## Structure
This is an explanation of the ideas that govern the way we made the Repo.  

* Directories-  
 The Repo is divided into directories by subject. 
The directories may be divided to sub-directories as needed, ending in an end-dir with no subs.  
in the end-dirs there will be an .md file called README.md and all the other files of the subject.  


* README-  
represents the subject of the end dir and will contain the references to all the resources.
    
    * [Template README](template.md) - copy and edit
    * [explanation](explanation.md) - explained and commented. 
Each directory has a `README.md` file.  
It is a markdown file which acts as the main page of the dir.  
it explains its purpose and point and links to all the content in the dir, be it files, or other dirs.  
READMEs should be Made like [so](#readme).


* files-  
__Adding files is discouraged__.  

    You should avoid adding a file when you can instead add a link to it on a relevant.  
    If you ever find yourself considering adding a file, ask yourself- is there really no other way to get to it other than the repo?  if there is, add a link to it instead.

    For instance if there is a really cool VSC extension you think everyone should get, add a link to it in the [vsc extensions](software/general/extensions/VSC_Extensions) directory  
    if you do add a file, add also alink to it in the relevant readme like so:
    ````
    [file name](path/filename.file)
    ````
    for instance: 
    ````
    [image](teach/bylink/searchfile.png)
    ```` 
    
    will look like: [image](teach/bylink/searchfile.png) and lead to and image by that name in these directories
