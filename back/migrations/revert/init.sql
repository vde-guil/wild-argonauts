-- Revert wild-argonauts:init from pg

BEGIN;

-- XXX Add DDLs here.

DROP TABLE argonaut;

COMMIT;
