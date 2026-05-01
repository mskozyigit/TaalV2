# 1. Build the project
./gradlew :composeApp:jsBrowserDistribution

# 2. Create a temporary directory
mkdir -p build/gh-pages

# 3. Copy the distribution files to the temporary directory
cp -r composeApp/build/dist/js/productionExecutable/* build/gh-pages/

# 4. Switch to the gh-pages branch
git checkout gh-pages

# 5. Copy the distribution files from the temporary directory
cp -r ../build/gh-pages/* .

# 6. Commit and push the changes
git add .
git commit -m "Update GitHub Pages"
git push origin gh-pages

# 7. Switch back to the main branch
git checkout main

# 8. Clean up the temporary directory
rm -rf build/gh-pages

