  select "c"."name"           as "category",
         count("cm"."filmId") as "numberOfFilms"
    from "filmCategory"
    join "categories"         as "c"   using ("categoryId")
    join "castMembers"        as "cm"  using ("filmId")
    join "actors"             as "a"   using ("actorId")
   where "a"."firstName"      = 'Lisa' and   "a"."lastName" = 'Monroe'
group by "c"."name";
