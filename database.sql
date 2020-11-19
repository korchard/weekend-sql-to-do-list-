CREATE TABLE tasks (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
    "status" VARCHAR (30) DEFAULT 'Incomplete'
);

INSERT INTO "tasks" ("task", "status") VALUES ('Take Davey for a walk', 'Incomplete');
INSERT INTO "tasks" ("task", "status") VALUES ('Feed Davey treats', 'Incomplete');
INSERT INTO "tasks" ("task", "status") VALUES ('Play with Davey', 'Incomplete');
INSERT INTO "tasks" ("task") VALUES ('Take Davey for a walk');

SELECT * FROM "tasks";