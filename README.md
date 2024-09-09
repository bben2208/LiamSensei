# LiamSensei

# How to collaborate using branch

Find issue you want to work on top right of the issue, you'll see "Assignees", make sure when you work on this issue(ticket) that you assign yourself so I know you're working on it.

Go to vscode, make sure you're on main

`git checkout main,`
`git pull,`

make sure everything is up to date

now create your new branch so you can make changes

`git checkout -b example_branch`

make changes requested from the issue

then create a PR with new changes

`git add .`
`git commit -m "message name"`
`git push`

copy the command it gives you and push

then follow the link to create a PR

create a PR, in the description describe your code in the description of the pr, paste the url of this issue in it so i know they're linked. 

ask me to review it.

if i ask you to make changes, go back to vscode and make the changes.

when you're ready to push the changes to your PR you do the same as before

`git add .`
`git commit -m "message name"`
`git push`

don't merge until i accept changes.

you shouldn't have any merge conflicts, but if you do, go to main

`git checkout main,`
`git pull,`

then make sure your main is up to date, go back to your branch

`git checkout example_branch`
`git merge main`

and open the merge editor and either accept incoming changes or accept your changes

once resolved just push your changes up

`git add .`
`git commit -m "message name"`
`git push`
