DROP TABLE IF EXISTS fmessagetable;

CREATE TABLE fmessagetable (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  messenger VARCHAR(512),
  funny BOOLEAN
)
