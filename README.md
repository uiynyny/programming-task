# programming-task

### Docker Instruction

1. run `./start.sh` to initiate mysql database server and `./stop.sh` to terminate.
2. use command
  ```
  docker run -it -p 3000:3000 --link db:db -e DATABASE_HOST=db [name:tag]
  ```
  to link database with web server and run web server at localhost:3000

3. navigate through `/user/` and `/user/:name` and use GET POST PUT DELETE method to manipulate the database.
