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

4. add a table of contents. it's a h2 section titled "Here You Can Find".  
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
    
5. add  a table of contents.
    1. add h2 header named "Here You Can Find".   
    5. under it a make a bullet list of the list's sections names in bold, with short explanations, using relative links like so:

    ```
    * [__section__](#section)-  <!--two spaces fot new line-->  
    many recipes for pumpkin

    * [__another section__](another-section)-  <!--two spaces fot new line-->  
    ways to slay vampires
    ```

    * !note: section urls inside the parentheses (#...) must be the exact names of the sections. it is not case sensitive but must use the exact same words  
    if they have spaces in them, use "-": (#section-has-spaces)



## How to Write a Page
first add a page title using h1
and a short description of the page's contents:  
`# Page title`  
`This is a demonstrative page`

then add a contents section like this:  
`## Here You can find:`  
This section lists relative links to relevant contents.    
* In a directory's README file it should link to the contents of the directory:

in
* [__New PC__](new-pc)
    Here you can find everything you need for when you have a new computer and you need to get all that hot stuff you like to use when programming.

* [__Cheatsheets__](cheatsheet)
    PDFs with useful information and handy tricks for many topics. 
<!-- are cheatsheets all that different from shortcut page? discuss! -->

* [__Resources__](resources)
    This  is the section for different resources you can use while learning and working.

## To contribute to the repo
1. Clone the Repo to your Desktop.

2. Create a new Branch, name it something sensible in regards to your planned change (eg. _VSC extensions addition_)

3. Edit you branch to your heart's desire, while maintaining the structure and style.  
__Please__ Make use of the [style guide](./style-guide.md).

4. Try to push/ publish the branch with GitHub desktop, you will see that you can't push it to the Repo.
__DON'T PANIC! that is normal__ 

    * GitHub desktop will ask if you'd like to instead fork the Repo and publish your branch there. Do it.

    * When you Do it will ask whether to fork for personal use or to contribute. Choose to contribute like the generous soul you are.

    * This will fork the repo to your account, But when you choose to make a pull request it will make it to this Repo
    here, the OG Repo.

5. When you are done, make a pull request.
    __Use the Label Addition__ if applicable or other labels appropriately, and make it nice and descriptive so the Admins can more easily review and merge your contributions. If your contribution relates to an open issue, please [link them together](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).

## Hebrew instructions 
(copy somewhere that can deal with hebrew like word)
1. עשה clone לריפו
2 צור branch חדש, קרא לו בשם סביר, שיסביר את התרומה שלך (למשל addition to VSC extensions)
3. ערוך את הbranch שלך ככל שתרצה (נא לשמור על המבנה והסגנון הקיימים)
4. נסה לעשות  push/ publish לbranch שלך עם גיטהאב דסקטופ. אתה תראה שלא תוכל לדחוף אותו לריפו. בלי פאניקה! זה אמור לקרות.
•	גיטהאב דסקטופ ישאל אותך אם תרצה במקום זאת לעשות fork לריפו ולעשות publish לbranch שלך שם. עשה זאת.
•	כשתעשה כך הוא ישאל אותך אם לעשות fork לשימוש אישי או כדי לתרום. בחר לתרום כמו הנפש הנדיבה שהינך.
•	כך תעשה fork לריפו לחשבונך, אך כשתבחר לעשות pull request היא תופנה לריפו המקורית שלנו כאן.
5. כשסיימת, עשה  pull request. השתמש בlabel שנקראת addition לתוספות או בלייבלים אחרים אם הם מתאימים. ותוסיף תיאור כדי שנוכל למרג'ג' אותה יותר בקלות. אם היא קשורה לissue פתוח, אנא קשר אותה אליו (https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)
