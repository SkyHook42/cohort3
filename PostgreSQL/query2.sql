-- list all current potential crimes related to batmobile
select id, short_name from public.crime
where crime.desc like '%batmobile%'
order by invoked;