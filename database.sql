---- CREATE the table
CREATE TABLE tasks (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
    "status" VARCHAR (30) DEFAULT 'Incomplete',
	"time_completed" VARCHAR (40) DEFAULT NULL
);

------ADDED to table
INSERT INTO "tasks" ("task", "status") VALUES ('Take Davey for a walk', 'Incomplete');
INSERT INTO "tasks" ("task", "status") VALUES ('Feed Davey treats', 'Incomplete');
INSERT INTO "tasks" ("task", "status") VALUES ('Play with Davey', 'Incomplete');
INSERT INTO "tasks" ("task") VALUES ('Take Davey for a walk');

------ORGANIZING the table
SELECT * FROM "tasks" ORDER BY "task";

------UPDATING the table
UPDATE "tasks" SET "status"='Incomplete', "time_completed"=$1 WHERE id=$2;

------DELETING from the table
DELETE FROM "tasks" WHERE id=$1;

------DISPLAYING the table in database
SELECT * FROM "tasks";