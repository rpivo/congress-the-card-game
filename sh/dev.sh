kill -9 $(lsof -t -i:1235);
echo '\npreparing build...';
npm run build;
if [ "$PROFILE" ]
then
cp dist/index.profiler.js.br dist/index.js.br;
cp automation/charts.js dist/charts.js;
rm dist/index.profiler.js.br;
fi
echo '\npreparing server...\n';
npm run serve &
if [ "$PROFILE" ]
then
echo 'preparing automation...';
node automation/automation.js;
mkdir dist/json;
cp automation/*.json dist/json/;
cd dist/json && echo `ls *.json` > jsonList.dsv && cd ../..;
echo '\nautomation finished.\n';
fi
