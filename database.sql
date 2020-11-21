CREATE TABLE tasks (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
    "status" VARCHAR (30) DEFAULT 'Incomplete'
);

INSERT INTO "tasks" ("task", "status") VALUES ('Take Davey for a walk', 'Incomplete');
INSERT INTO "tasks" ("task", "status") VALUES ('Feed Davey treats', 'Incomplete');
INSERT INTO "tasks" ("task", "status") VALUES ('Play with Davey', 'Incomplete');
INSERT INTO "tasks" ("task") VALUES ('Take Davey for a walk');

SELECT * FROM "tasks" ORDER BY "task";

UPDATE "tasks" SET "status"='Incomplete', "time_completed"=$1 WHERE id=$2;

DELETE FROM "tasks" WHERE id=$1;

SELECT * FROM "tasks";