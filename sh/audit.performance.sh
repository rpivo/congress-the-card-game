DIRECTORY=$(date +"%Y-%m-%d")
if [ ! -d reports ]; then
  mkdir ./reports
fi
if [ ! -d "$DIRECTORY" ]; then
  mkdir ./reports/"$DIRECTORY"
fi
npx lighthouse-multi \
  --depth=100 \
  --endpoints=https://www.congressthecardgame.com \
  --output=reports/"$DIRECTORY"