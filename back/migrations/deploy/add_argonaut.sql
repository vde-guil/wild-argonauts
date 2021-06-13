-- Deploy wild-argonauts:add_argonaut to pg

BEGIN;

-- XXX Add DDLs here.

CREATE OR REPLACE FUNCTION add_argonaut(json) RETURNS argonaut AS $$
    
    INSERT INTO argonaut (name)
    VALUES ($1->>'name')
    RETURNING *;

$$ LANGUAGE sql;

COMMIT;
