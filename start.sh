#!/bin/sh

# Run the MySQL container, with a database named 'users' and credentials
# for a users-service user which can access it.
cd /data/
echo "Starting DB..."
docker run --name db -d \
  -e MYSQL_ROOT_PASSWORD=123 \
  -e MYSQL_DATABASE=mydb \
  -p 3306:3306 \
  mysql:latest

# Wait for the database service to start up.
echo "Waiting for DB to start up..."
docker exec db mysqladmin --silent --wait=30 -uroot -p123 ping || exit 1

# Run the setup script.
echo "Setting up initial data..."
docker exec -i db mysql -uroot -p123 mydb < mydb.sql
