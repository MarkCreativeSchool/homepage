echo "1.git pull"
git pull

# web
npm run build
forever stop 0
kill -9 $(/usr/sbin/lsof -ti tcp:3000)
sleep 10
NODE_ENV=production forever start -c "npm run start" ./
