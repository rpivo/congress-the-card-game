kill -9 $(lsof -t -i:1235);
npm run build;
if [ "$PROFILE" ]
then
cp dist/index.profiler.js.br dist/index.js.br && rm dist/index.profiler.js.br
fi
npm run serve;
