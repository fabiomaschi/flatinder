compile:
	npx tsc -p ./tsconfig.build.json

run: compile
	node .

infra-up:
	docker-compose -f docker-compose.yml up -d --force-recreate

infra-stop:
	docker-compose -f docker-compose.yml stop

infra-restart: infra-stop infra
