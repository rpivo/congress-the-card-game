DIRECTORY=$(date +"%Y-%m-%d")
if [ ! -d reports ]; then
  mkdir ./reports
fi
if [ ! -d "$DIRECTORY" ]; then
  mkdir ./reports/"$DIRECTORY"
fi
# to run this script, globally install lighthouse
# npm install -g lighthouse
lighthouse https://www.congressthecardgame.com \
  --emulated-form-factor=none \
  --output=html \
  --output-path=./reports/"$DIRECTORY"/report-$(date +"%Y-%m-%d-%I-%M-%S-%p").html \
  --save-assets \
  --throttling-method=provided \
  --view