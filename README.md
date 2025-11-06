
# ✅ Workflows Part 2 – DevOps Hands-on Project

This repository demonstrates the use of **GitHub workflows, feature branching, Pull Request approvals, branch protection rules, and GitHub Actions for CI/CD automation** as required in the assignment.

## 📌 Project Objectives
✔ Create a feature branch and use Pull Requests (PR) for merging changes  
✔ Enable code reviews and approvals before merge  
✔ Configure branch protection rules to block direct commits to `main`  
✔ Implement GitHub Actions CI/CD pipeline to run tests, build, and (optionally) deploy  
✔ Provide screenshots of workflow runs, PR approvals, and branch protection settings  

## 📁 Repository Structure

```
.
├── src/                  # Application source code
│   └── index.js
├── test/                 # Unit tests
│   └── add.test.js
├── .github/
│   ├── workflows/
│   │   ├── ci.yml        # Continuous Integration (test + build)
│   │   └── deploy.yml    # (Optional) Simulated deployment on main branch
│   ├── CODEOWNERS        # Defines who must review PRs
│   └── PULL_REQUEST_TEMPLATE.md
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ GitHub Actions Workflows

### ✅ 1. Continuous Integration – `ci.yml`
Triggered on `push` or `pull_request` to any branch.  
It performs:
- ✅ Checkout code  
- ✅ Install dependencies  
- ✅ Run tests (`npm test`)  
- ✅ Build app and upload artifact  

### ✅ 2. Deployment Simulation – `deploy.yml`
Triggered only on **push to `main`** after PR merge:  
- ✅ Downloads build artifact  
- ✅ Simulates deployment (prints output from `dist/`)  

## 🔐 Branch Protection Rules (Main Branch)
Enabled via: **Settings → Branches → Add Rule**  
✔ Require pull request before merging  
✔ Require at least **1 approval**  
✔ Require **review from CODEOWNERS**  
✔ Require **status checks to pass** (`ci / test`, `ci / build`)  
✔ Prevent direct commits to `main`  

## 🛠️ Pull Request Workflow Used

1. Clone repository & create feature branch:
   ```bash
   git checkout -b feature/new-change
   ```

2. Make changes → Commit → Push:
   ```bash
   git add .
   git commit -m "feat: example feature"
   git push -u origin feature/new-change
   ```

3. Open **Pull Request** on GitHub  
4. Reviewer (from `CODEOWNERS`) approves the PR  
5. CI runs (must pass)  
6. Merge PR → deploy workflow triggers automatically  

## 📸 Required Screenshots for Submission
✅ Pull Request page showing:
- ✔ CI workflow passed  
- ✔ Approval from reviewer/CodeOwner  

✅ GitHub Actions page showing:
- ✔ Successful CI pipeline run (build + test)  
- ✔ Successful deployment run (after merging to `main`)  

✅ Branch Protection Settings page showing:
- ✔ Rules applied to `main` branch  

## ✅ Technologies Used
| Tool              | Purpose                           |
|-------------------|------------------------------------|
| Git & GitHub      | Version control & collaboration   |
| GitHub Actions    | CI/CD workflow automation         |
| Node.js           | Sample application & testing      |
| CODEOWNERS        | Enforcing reviewer approvals      |

## 📚 References
- GitHub Actions Documentation – https://docs.github.com/actions  
- Atlassian Git Workflow Guide  
- Puppet 2023 State of DevOps Report