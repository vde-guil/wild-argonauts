-- Deploy wild-argonauts:init to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE argonaut (
    -- generated always as identity is the new way of saying 'serial', more compliant to SQL standards
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL UNIQUE
);

COMMIT;
