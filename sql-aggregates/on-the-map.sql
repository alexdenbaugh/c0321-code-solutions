  select "co"."name"     as "countries",
         count("cities") as "citiesPerCountry"
    from "cities"
    join "countries"     as "co" using ("countryId")
group by "countryId";
