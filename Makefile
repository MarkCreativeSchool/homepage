web:
	npm run dev

# Github Pages用にgenerate
generate:
	npm run generate:gh-pages

# Github Pagesにデプロイ
deploy:
	npm run generate:gh-pages
	npm run deploy
