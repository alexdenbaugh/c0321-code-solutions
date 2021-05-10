  select "c"."firstName"    as "firstName",
         "c"."lastName"     as "lastName",
         sum("p"."amount")  as "rentalExpenses"
    from "payments"     as "p"
    join "customers"     as "c" using ("customerId")
group by "c"."customerId"
order by "rentalExpenses" desc;
