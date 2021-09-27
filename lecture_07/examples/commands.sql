-- insert
insert into clients (first_name, last_name, email, city, gender)
values ('Bohdan', 'Yaskevich', 'bohdan@gmail.com', 'Sumy', 'Male');

-- simple select
SELECT * FROM clients where first_name = 'Bohdan';

-- update
update clients set email = 'bohdan@gmail.com' where email = 'bohdan.real@gmail.com';

-- delete
delete from clients where id = 9;

-- unique rows
select distinct gender from clients;

-- sorting
select * from cars order by year desc;

-- pagination
select * from cars order by year desc, make desc limit 5 offset 0;

-- IN
select id, make, model, year from cars where make in ('BMW', 'Audi', 'Volvo');

-- BETWEEN
select id, make, model, year from cars where year BETWEEN 2006 and 2007;

-- LIKE
select id, make, model, year from cars where make like 'BM_';
select id, make, model, year from cars where make like '%m%';
select id, make, model, year from cars where make ilike 'volks%';

-- MIN, COUNT
select MIN(year) from cars where make = 'BMW';
select count(*) from cars where make = 'BMW';

-- grouping
select make, count(*) from cars group by make;

-- filtering by aggregation funcs
select make, count(*) as cars_count from cars group by make having count(*) > 15 order by cars_count desc;

-- select avg(year) from cars;
-- subquery
select id, make, model, year from cars where year > (select avg(year) from cars) order by year desc;

-- join
select * from clients inner join cars on clients.city = cars.city;

-- relations
create table if not exists orders (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    ordered_at timestamp default CURRENT_TIMESTAMP,
    client_id BIGINT REFERENCES clients(id),
    car_id BIGINT REFERENCES cars(id)
);

insert into orders (client_id, car_id) values (502, 133);
select * from orders;

select clients.id, clients.first_name, cars.make, cars.model
from clients
    join orders on clients.id = orders.client_id
    join cars on cars.id = orders.car_id
where clients.id = 502;
