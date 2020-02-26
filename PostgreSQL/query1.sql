-- report incident locations completed by investigator 5 and 6
select investigator_id,  address from public.incident
where investigator_id = '5' or investigator_id = '6'
order by close;