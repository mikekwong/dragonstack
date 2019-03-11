/* Many to Many junction table */
CREATE TABLE dragonTrait (
  /* schema */
  "traitId" integer,
  "dragonId" integer,
  FOREIGN KEY ("traitId") REFERENCES trait (id),
  FOREIGN KEY ("dragonId") REFERENCES dragon (id)
);

