# Style Guide
Here is the guide to editing and adding to the Repo.  
The yellow words and boxes are MarkDown code snippets demonstrating how to write and edits different elements.

## Here You'll Find
* [Basic MarkDown Syntax](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)
A guide to Basic markdown used in this page.

* [Structure](#structure)
An explanation of the Repo's intended structure.

* [README](#readme)
Rules to follow when adding or editing a README file.

* [Page Writing Demonstration](#how-to-write-a-page)  
Step-by-step demo for new Editors.

* [How to contribute to the wiki](#To-contribute-to-the-repo)  
Step-by-b-step guide for contributing.

* [How to Contribute (hebrew)](#Hebrew-instructions)  
Step-by-b-step guide for contributing in hebrew. Copy and paste somewhere that can deal with hebrew like MicroSoft Word)

## Structure
This is an explanation of the ideas that govern the way we made the Repo.  

* __Directories__-The Repo is structured in __dirs__ (directories), that hold __items__:  
__lists__  and __files__ relating to a certain subject or use.  
A Dir must always contain a __README__ .

* __README__-  
Each directory has a `README.md` file.  
It is a markdown file which acts as the main page of the dir.  
it explains its purpose and point and links to all the content in the dir, be it files, or other dirs.  
READMEs should be Made like [so](#readme).

* __lists__-  
when we say lists we mean .md files that contain links to various things. Follow [these](#lists) guidelines when making or adding to them.

* __files__-  
files are all those non .md files like the PDFs in [Cheatsheets](./cheatsheet).  
__Adding files is greatly discouraged__.  

     You should avoid adding a file when you can instead add a link to it on a relevant __list__.  
If you ever find yourself considering adding a file, ask yourself- is there really no other way to get to it other than the repo?  if there is, add a link to it instead.  

    For instance if there is a really cool VSC extension you think everyone should get, add a link to it in the [downloads](/resources/downloads.md) list in the __Resources__ dir.

## README
How to write/edit a README file in our Repo.
* you can view this [lovely guide](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md) to see how a repo's README should be. 

but here, we do it this way:

1. Add a file README.md to a new directory if you make one.
    * it must be named exactly that.
    * a dir has exactly one README. never more- never less, lest we incur the wrath of the GitHub deities.

2. The README must have an h1 header named for the directory (doesn't have to be exact but it should convey the meaning)

3. under the title comes a concise description of the purpose of th dir.

4. add a legend. it's a h2 section titled "Here You Can Find".  
under it a make a bullet list of the dir's items in bold with short explanations, using relative links as such:
```
* [__file name__](file-name.extension)-  <!--two spaces fot new line-->  
file containing this and that...

* [__list name__](list-name.md)-  <!--two spaces fot new line-->  
a list of useful bla bla bla...

```
## list
How to write/edit a list in our Repo.  
A list is a .md (markdown) file that we use to list links to our favorite destinations.
* you can view this [lovely guide](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax) to learn how to write in markup. it's quite simple and nice. 

anyway, to make a list:

1. Add a file listName.md to an existing directory, dont name it something that's cumbersome and inconvenient to put in links.

    * you should avoid adding new dirs.If you must add a new one, remember to add a [README](#README).

2. The list has an h1 header named for like the list (doesn't have to be exact but it should convey the meaning)

3. under the title comes a concise description of the purpose of th list.

4. add a section:
    1. add a section h2 header with a name describing it's content.
        * don't make the name long, it should be concise.  
    2. add a short description for the section
    3. add links in bold, with short explanations, using relative links like so:

    ```
    * [__link name__](url)-  <!--two spaces fot new line-->  
    containing this and that...

    * [__list name__](url)-  <!--two spaces fot new line-->  
    a list of useful bla bla bla...

    ```
    4. repeat as necessary.
    
5. add  a legend before the sections
    1. add h2 header named "Here You Can Find".   
    2. under it a make a bullet list of the all the list's sections' names in bold, with short explanations, using relative links like so:

    ```
    * [__section__](#section)-  <!--two spaces fot new line-->  
    many recipes for pumpkin

    * [__another section__](#another-section)-  <!--two spaces fot new line-->  
    ways to slay vampires
    ```

    * !note: section urls inside the parentheses (#...) must be the exact names of the sections. it is not case sensitive but must use the exact same words  
    if they have spaces in them, use "-": (#section-has-spaces)



## How to Write a Page
1. first add a page title using h1
and a short description of the page's contents:  
`# Page title`  
`This is a demonstrative page`
2. if it's a list add sections 
    1. add a section h2 header with a name describing it's content.  
    `## Good Tips`
    * don't make the name long, it should be concise.  
    2. add a short description for the section  
     `a few useful tips`
    3. add links in bold, with short explanations, using relative links like so:

    ```
    * [__Water Bottle Light__](https://removeandreplace.com/wp-content/uploads/2013/06/helpful-tips-and-tricks-_33.jpg)-   <!--two spaces fot new line-->  
    good tip for night

    * [__ice bottle__](uhttps://removeandreplace.com/wp-content/uploads/2013/06/helpful-tips-and-tricks-_54.jpgrl)-  <!--two spaces fot new line-->  
    good tip for summer

    ```
    4. repeat as necessary.
3. then add a legend section after the page title, like this:  
`## Here You can find:`  
    * In a directory's [README](#readme) file it should list the contents of the directory:
    * In a [list](#list) .md file it should list sections of the list:
        
        ```
        * [__Good Tips__](#good-tips)-   <!--two spaces fot new line-->  
        some nice tips

        ```
