COPY crime FROM '/home/skyhook/code/cohort3/PostgreSQL/tablecrime.csv' DELIMITER ',';
COPY incident FROM '/home/skyhook/code/cohort3/PostgreSQL/tableincident.csv' DELIMITER ',';
COPY officer FROM '/home/skyhook/code/cohort3/PostgreSQL/tableofficer.csv' DELIMITER ',';
COPY precinct FROM '/home/skyhook/code/cohort3/PostgreSQL/tableprecinct.csv' DELIMITER ',';
COPY suspect FROM '/home/skyhook/code/cohort3/PostgreSQL/tablesuspect.csv' DELIMITER ',';
COPY public.incident_crime FROM '/home/skyhook/code/cohort3/PostgreSQL/tableincident_crime.csv' DELIMITER ',';
COPY public.incident_suspect FROM '/home/skyhook/code/cohort3/PostgreSQL/tableincident_suspect.csv' DELIMITER ',';
