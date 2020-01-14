docker-build:
	docker build -t clazbooks-landing .

docker-start:
	docker run --rm -p 3000:3000 clazbooks-landing
