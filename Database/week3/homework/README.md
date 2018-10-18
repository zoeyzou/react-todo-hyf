## Requirement
  Using an entity relationship diagram, design the data model for an application of your choice; this could be anything, but previous students have used a small business (with staff, offices, and job titles), a library (with books, genres, racks, members, and a borrowing log), or a farm (with animals, barns, and farmers). Your application must include at least one many-to-many relationship and any supporting tables (associative entities) that are needed. The entity relationship diagram must describe what tables you will need, the columns in these tables, which column is the primary key, and the relationships between tables.

  Next, using the entity relationship diagram as a starting point, write all the necessary `CREATE TABLE` statements to create all tables and relationships (foreign key constraints) for this data model.

  Submit an image or PDF of your entity relationship diagram, and a `.sql` file with the `CREATE TABLE` statements.

## Solution
  The idea is to build a boardgame dashboard. The `boardgames` table have all the information about games, including names, player numbers, recommended ages, authors, available shops. Among the columns, `authors`, `categories` and `shops` are the other 3 tables that has one to many relationship with table `boardgames`. In this case, the `primary key` of `boardgames` is `id`, and `foreign key` are `author_id`, `category_id` and `shop_id`. 3 extra tables represents many to many relationship.

  