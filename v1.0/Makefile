web:
	npm run dev

# Github Pages用にgenerate
generate:
	npm run generate:gh-pages

# FirebaseHostingへデプロイ
deploy:
	npm run generate && \
	firebase deploy --only hosting

# Github Pagesにデプロイ
# deploy:
# 	npm run generate:gh-pages
# 	cp ./CNAME dist/CNAME
# 	npm run deploy
