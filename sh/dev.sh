kill -9 $(lsof -t -i:1235);
echo '\npreparing build...';
npm run build;
if [ "$PROFILE" ]
then
cp dist/index.profiler.js.br dist/index.js.br && rm dist/index.profiler.js.br;
fi
echo '\npreparing server...';
npm run serve &
if [ "$PROFILE" ]
then
echo '\npreparing automation...';
tsc automation.ts --skipLibCheck;
node automation.js;
rm automation.js;
echo '\nautomation finished.\n';
fi
