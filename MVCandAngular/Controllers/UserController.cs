using System.Linq;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;

namespace MVCandAngular.Controllers
{
    [Route("api/user")]
    public class UserController : Controller
    {
        private ApplicationContext _db;

        public UserController(ApplicationContext context)
        {
            _db = context;

            if (!_db.Users.Any())
            {
                _db.Users.Add(new User { FirstName ="First_Name_User1", LastName= "Last_Name_User1" });
                _db.SaveChanges();
            }
        }

        [HttpGet]
        public User Get()
        {
            return _db.Users.FirstOrDefault();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Update(user);
            _db.SaveChanges();

            return Ok(user);
        }

    }
}