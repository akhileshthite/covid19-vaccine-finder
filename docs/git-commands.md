First follow the steps of project setup given in the README.md

## STEPS to contribute:
1. Initialize git repository.
```
git init
```
2. Create a new branch.
```
git branch YourBranchName
```
3. Shift to that branch from master branch.
```
git checkout YourBranchName
```
**Make all the changes (bug fixes, enhancements on your branch)**

4. Add all the changes once you are done.
```
git add .
```
5. Make a commit message.
```
git commit -m 'your_message'
```
6. Shift to the master branch.
```
git checkout main
```
7. Merge everything from your branch to the master branch.
```
git merge YourBranchName
```
8. Get ready to push from your local machine.
```
git remote add <message> https://<GitHubToken>@github.com/<username>/<RepositoryName>.git
```
9. Push everything on your forked repository.
```
git push -u <message> main
```
