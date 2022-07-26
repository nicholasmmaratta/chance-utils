# chance-utils
extend minimalist number generator to do more stuff

# How To Contribute

## Git commands

Go to any terminal / powershell, and make sure you are in the correct directory for this github repository.

`git status` 
- use this to see what branch you are on, and what changes you have unstaged or staged
- eg. running `git status` on a new branch will show the printout
```git
On branch upload/monetization
nothing to commit, working tree clean
```

`git pull origin main`
- use this to always keep your current local branch up to date with `main`
- being up to date with `main` branch is a basic requirement of any `Pull Request`

`git checkout -b "branch/name"`
- use this to create a new branch and switch to it

`git checkout "branch/name"`
- use this to switch to an existing branch

`git add "./folder-path/to/file.js"`
- use this to stage changes of a specific file

`git add .`
- use this to stage all change on all files

`git commit -m "some message about the changes made"`
- use this to commit the staged changes to the local branch

`git push origin "branch/name"`
- use this to push local commits to the named branch in this github repository
- eg. running `git push origin "sort/abc"` will push local commits to the "sort/abc" branch in this repository. 
Suggested to always push from local to the branch of the same name.

`git push origin head`
- use this to push local commits to the branch in this github repository with the same name as the branch you are checked out on locally
- eg. if you are on the "reverse/word" branch, running `git push origin head` will push local commits to the "reverse/word" branch in this repository.

## Github

Once you've pushed commits to a branch in this repo, go to `Pull Requests` in the repository header
- `Pull Requests` is right between `Code` `Issues` and `Actions` `Projects`

Once you've navigated to `Pull Requests`, you should either see the branch you pushed commits to, or you can click the green button `New Pull Request`
- A `Pull Request` is a comparison between a named branch you pushed commits to, and usually the `main` branch.
- In most repositories, once code is in the `main` branch, it is effectively part of the codebase forever, and will need another `Pull Request` to remove or change

Make sure the Pull Request is comparing the branch you pushed commits to and `main`.
- If brand new, the pull request should look like
```markdown
base: main <= compare: branch/name
```
- Once the Pull Request is created, the Pull Request will have a title and a description underneath, which can be something like
```markdown
#Deliverable fields by platform & postType Feature/sc7475 #204
OPEN someusername wants to merge 12 commits into `main` from `feature/sc7475`
```

- Once a Pull Request is created and is up to date with main, it can be approved
- Pull Request review is an important part of code review, to make sure code changes are correct and unlikely to damage existing software systems

## Approval

Once a Pull Request, or PR, is approved it can be either `merged` or `squashed and merged`
- In most professional settings, `squash and merged` is a great way to make commit history of a repository much cleaner because each PR only adds a single commit
- There are other benefits to squashing and merging, especially when needing to revert a specific commit or deal with a specific code change that broke software

Once Pull Request is merged, the code now is part of `main` and will forever be part of the repository `commits`
