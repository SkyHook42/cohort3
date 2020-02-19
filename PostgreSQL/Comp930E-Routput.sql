CREATE TABLE "suspect" (
  "id" serial PRIMARY KEY,
  "fname" char(255),
  "lname" char(255),
  "tel" char(12),
  "address" varchar
);

CREATE TABLE "crime" (
  "id" char(255) PRIMARY KEY,
  "short_name" char(255),
  "desc" varchar,
  "invoked" timestamp
);

CREATE TABLE "incident_suspect" (
  "id" serial PRIMARY KEY,
  "suspect_id" int,
  "incident_id" int
);

CREATE TABLE "incident" (
  "id" serial PRIMARY KEY,
  "fname" char(255),
  "lname" char(255),
  "telco" char(12),
  "address" varchar,
  "issue" varchar NOT NULL,
  "entry" timestamp,
  "close" timestamp,
  "investigator_id" int
);

CREATE TABLE "officer" (
  "id" serial PRIMARY KEY,
  "fname" char(255),
  "lname" char(255),
  "address" varchar,
  "commission" timestamp,
  "precinct_assign" int
);

CREATE TABLE "incident_crime" (
  "id" serial PRIMARY KEY,
  "incident_id" int,
  "crime_id" int
);

CREATE TABLE "precinct" (
  "id" serial PRIMARY KEY,
  "name" char(255),
  "address" varchar,
  "sgt_desk_tel" char(12)
);

ALTER TABLE "incident_suspect" ADD FOREIGN KEY ("suspect_id") REFERENCES "suspect" ("id");

ALTER TABLE "incident" ADD FOREIGN KEY ("investigator_id") REFERENCES "officer" ("id");

ALTER TABLE "officer" ADD FOREIGN KEY ("precinct_assign") REFERENCES "precinct" ("id");

ALTER TABLE "incident_suspect" ADD FOREIGN KEY ("incident_id") REFERENCES "incident" ("id");

ALTER TABLE "incident_crime" ADD FOREIGN KEY ("incident_id") REFERENCES "incident" ("id");

ALTER TABLE "incident_crime" ADD FOREIGN KEY ("crime_id") REFERENCES "crime" ("id");
