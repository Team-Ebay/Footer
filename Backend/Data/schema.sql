DROP DATABASE IF EXISTS footer;

CREATE DATABASE footer;
\c footer

DROP TABLE IF EXISTS explorelinks;

DROP TABLE IF EXISTS alsoviewed;

CREATE TABLE explorelinks(
  id serial PRIMARY KEY,
  title TEXT
);

CREATE TABLE alsoviewed(
  id serial PRIMARY KEY,
  url_img TEXT,
  title TEXT,
  condition TEXT,
  price TEXT,
  shipping TEXT,
  sold NUMERIC
);