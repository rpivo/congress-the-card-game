rm -rf dist;
mkdir dist;
cp src/index.html dist/index.html;
cp src/favicon.ico dist/favicon.ico;
if [ "$PROFILE" ]
then
cp automation/automation.html dist/automation.html;
fi
