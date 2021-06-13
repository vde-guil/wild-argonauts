-- Revert wild-argonauts:add_argonaut from pg

BEGIN;

-- XXX Add DDLs here.

DROP FUNCTION add_argonaut(json);

COMMIT;
