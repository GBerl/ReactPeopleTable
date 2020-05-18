using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleTable.data;

namespace ReactPeopleTable.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connection;
        public PeopleController(IConfiguration configuration)
        {
            _connection = configuration.GetConnectionString("Conn");
        }

        [Route("getallpeople")]
        public List<Person> GetAllPeople()
        {
            var repo = new PeopleRepository(_connection);
            return repo.GetAllPeople();
        }

        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleRepository(_connection);
            repo.AddPerson(person);
        }
        [Route("editperson")]
        public void EditPerson(Person person)
        {
            var repo = new PeopleRepository(_connection);
            repo.EditPerson(person);
        }
        [Route("deleteperson")]
        public void DeletePerson(Person person)
        {
            var repo = new PeopleRepository(_connection);
            repo.DeletePerson(person);
        }
        [Route("deletepeople")]
        public void DeletePeople( IEnumerable<Person> person)
        {
            var repo = new PeopleRepository(_connection);
            repo.DeletePeople(person);
        }
    }
}