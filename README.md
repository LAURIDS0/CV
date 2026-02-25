# CV - Dev Branch Guide

 Dette er dev-branch. Her arbejdes alt udviklingsarbejde og eksperimenter.

 Git Workflow

# 1. Skift til dev-branch
 - git checkout dev

# 2. Tjek ændringer
 - git status

# 3. Tilføj og commit ændringer
 - git add .
 - git commit -m "Beskriv ændringerne her"

# 4. Push til dev-branch
 - git push origin dev

# Deployment til GitHub Pages

# Når du vil opdatere live-sitet:
 - npm run deploy

 - Dette bygger først projektet (npm run build)
 - Pusher kun build/ mappen til build-branch
 - Live-sitet vil være opdateret på:
 https://LAURIDS0.github.io/CV

# Valgfrit: Opdater main

# Hvis du vil synkronisere stabil version med dev:
 - git checkout main
 - git merge dev
 - git push origin main

# Tips:
 - Arbejd altid på dev
 - Commit og push ofte
 - Kør kun npm run deploy når du vil opdatere GitHub Pages
 - README skal kun være på dev og main, ikke på build