CREATE DATABASE perndb;

CREATE TABLE todo
(
  todo_id SERIAL PRIMARY KEY,
  username VARCHAR
  (25),
  description VARCHAR
  (255)
);