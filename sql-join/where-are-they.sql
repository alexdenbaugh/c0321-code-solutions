  select  "a"."line1",
          "c"."name"      as  "city",
          "a"."district",
          "count"."name"  as  "country"
    from  "addresses"     as  "a"
    join  "cities"        as  "c"        using  ("cityId")
    join  "countries"     as  "count"    using  ("countryId");
