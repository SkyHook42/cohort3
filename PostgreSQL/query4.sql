--find precinct with largest incident count

-- create view incidentXref as
-- select public.incident.id, public.officer.lname, public.officer.precinct_assign
-- from public.incident, public.officer
-- where investigator_id = public.officer.id;

select count(incidentXref.id) as tally, public.precinct.name
from incidentXref, public.precinct
where incidentXref.precinct_assign = public.precinct.id
group by public.precinct.name
order by tally desc;