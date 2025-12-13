console.log('test');
const a = 25;
console.log(a);


// PS C:\Programing Practis\React-Basics\Mastring git> git add readme.md
// PS C:\Programing Practis\React-Basics\Mastring git> git status
// On branch main

// No commits yet

// Changes to be committed:
//   (use "git rm --cached <file>..." to unstage)
//         new file:   readme.md
// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         hello.js

// PS C:\Programing Practis\React-Basics\Mastring git> git commit -m 'Add  readme.md file'   
// [main (root-commit) 560beb1] Add  readme.md file
//  1 file changed, 0 insertions(+), 0 deletions(-)
//  create mode 100644 readme.md
// PS C:\Programing Practis\React-Basics\Mastring git> git status
// On branch main
// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         hello.js

// nothing added to commit but untracked files present (use "git add" to track)
// PS C:\Programing Practis\React-Basics\Mastring git> git add ./
// PS C:\Programing Practis\React-Basics\Mastring git> git commit -m 'Add helloand test files'
// [main dd2f59e] Add helloand test files
//  2 files changed, 0 insertions(+), 0 deletions(-)
//  create mode 100644 hello.js
//  create mode 100644 test.js
// PS C:\Programing Practis\React-Basics\Mastring git> git status
// On branch main
// nothing to commit, working tree clean
// PS C:\Programing Practis\React-Basics\Mastring git> gitlog
// gitlog : The term 'gitlog' is not recognized as the name of a cmdlet, function, script 
// file, or operable program. Check the spelling of the name, or if a path was included, 
// verify that the path is correct and try again.
// At line:1 char:1
// + gitlog
// + ~~~~~~
//     + CategoryInfo          : ObjectNotFound: (gitlog:String) [], CommandNotFoundExcepti  
//    on
//     + FullyQualifiedErrorId : CommandNotFoundException

// PS C:\Programing Practis\React-Basics\Mastring git> git log 
// commit dd2f59ecaaaeaeb9a21ce0f484df9d17a13c19ef (HEAD -> main)
// Author: Abhay <abhaysahucse@gmail.com>
// Date:   Sat Dec 13 15:50:51 2025 +0530

//     Add helloand test files

// commit 560beb193e673020613b36058003fc778242c156
// Author: Abhay <abhaysahucse@gmail.com>
// Date:   Sat Dec 13 15:44:21 2025 +0530

//     Add  readme.md file
// PS C:\Programing Practis\React-Basics\Mastring git> git checkout 560beb193e673020613b36058003fc778242c156
// Note: switching to '560beb193e673020613b36058003fc778242c156'.

// You are in 'detached HEAD' state. You can look around, make experimental
// changes and commit them, and you can discard any commits you make in this
// state without impacting any branches by switching back to a branch.

// If you want to create a new branch to retain commits you create, you may
// do so (now or later) by using -c with the switch command. Example:

//   git switch -c <new-branch-name>

// Or undo this operation with:

//   git switch -

// Turn off this advice by setting config variable advice.detachedHead to false

// HEAD is now at 560beb1 Add  readme.md file
// PS C:\Programing Practis\React-Basics\Mastring git> git checkout main 
// Previous HEAD position was 560beb1 Add  readme.md file
// Switched to branch 'main'
// PS C:\Programing Practis\React-Basics\Mastring git> 
// PS C:\Programing Practis\React-Basics\Mastring git> git  checkout -f main
// Already on 'main'
// PS C:\Programing Practis\React-Basics\Mastring git>   git branch -M main
// PS C:\Programing Practis\React-Basics\Mastring git> git remote add origin https://github.com/abhaysahu-cse/mastering_git.git
// PS C:\Programing Practis\React-Basics\Mastring git> git push -u origin main 
// info: please complete authentication in your browser...
// Enumerating objects: 6, done.
// Counting objects: 100% (6/6), done.
// Delta compression using up to 12 threads
// Compressing objects: 100% (3/3), done.
// Writing objects: 100% (6/6), 510 bytes | 102.00 KiB/s, done.
// Total 6 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
// To https://github.com/abhaysahu-cse/mastering_git.git
//  * [new branch]      main -> main
// branch 'main' set up to track 'origin/main'.
// PS C:\Programing Practis\React-Basics\Mastring git> git branch brach-name 
// PS C:\Programing Practis\React-Basics\Mastring git> git checkout branch 'branch-name'
// error: pathspec 'branch' did not match any file(s) known to git
// error: pathspec 'branch-name' did not match any file(s) known to git
// PS C:\Programing Practis\React-Basics\Mastring git> git branch
// >>
//   brach-name
// * main
// PS C:\Programing Practis\React-Basics\Mastring git> git branch -m brach-name branch-name
// >>
// PS C:\Programing Practis\React-Basics\Mastring git> git checkout branch-name 
// Switched to branch 'branch-name'
// PS C:\Programing Practis\React-Basics\Mastring git> git checkout main 
// Switched to branch 'main'
// Your branch is up to date with 'origin/main'.
// PS C:\Programing Practis\React-Basics\Mastring git> git checkout -b feature-branch
// Switched to a new branch 'feature-branch'