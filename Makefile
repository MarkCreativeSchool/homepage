dev:
	cd v2.0 && npm run dev

deploy:
	cd v2.0 && npm run generate && firebase deploy --only hosting