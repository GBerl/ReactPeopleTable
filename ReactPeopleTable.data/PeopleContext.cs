using Microsoft.EntityFrameworkCore;
using System;

namespace ReactPeopleTable.data
{
    public class PeopleContext:DbContext
    {
        private string _connection;

        public PeopleContext(string connection)
        {
            _connection = connection;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connection);
        }

        public DbSet<Person> People { get; set; }
    }
}
