using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace ReactPeopleTable.data
{
    public class PeopleRepository
    {
        private string _connection;

        public PeopleRepository(string connection)
        {
            _connection = connection;
        }
        
        public List<Person> GetAllPeople()
        {
            using (var context = new PeopleContext(_connection))
            {
                return context.People.ToList();
            };
           
        }
        public void AddPerson(Person person)
        {
            using (var context = new PeopleContext(_connection))
            {
                context.People.Add(person);
                context.SaveChanges();
            };

        }
        public void EditPerson(Person person)
        {
            using (var context = new PeopleContext(_connection))
            {
                context.People.Attach(person);
                context.Entry(person).State = EntityState.Modified;
                context.SaveChanges();
            };

        }
        public void DeletePerson(Person person)
        {
            using (var context = new PeopleContext(_connection))
            {
                context.Database.ExecuteSqlCommand("delete from People where id=@id",
                    new SqlParameter("@id", person.Id));
            };

        }
        public void DeletePeople(IEnumerable<Person> people)
        {
            foreach (Person p in people)
            {
                DeletePerson(p);
            }

        }
    }
}
