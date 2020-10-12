export NODE_ENV=development;
export PROFILE=true;
rm automation/*.json;
cp automation/automation.html dist/automation.html;
cp automation/example.csv dist/example.csv;
npm run watch;
