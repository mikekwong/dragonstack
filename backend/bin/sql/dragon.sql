CREATE TABLE dragon (
  id serial PRIMARY KEY,
  birthdate timestamp NOT NULL,
  nickname varchar(64),
  "generationId" integer,
  FOREIGN KEY ("generationId") REFERENCES generation (id)
);

