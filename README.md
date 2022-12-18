```shell
docker volume create 2048volume
```

```shell
docker build -t 2048game .
```

```shell
docker run --rm --name 2048game -p 8080:8080 -v 2048volume:/code/data -d 2048game
```

```shell
docker stop -t 2 2048game
```

```shell
docker system prune -a --volumes
```