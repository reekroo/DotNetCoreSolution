using System.Linq;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Controllers
{
    [Route("api/user")]
    public class UserController : Controller
    {
        private  IUserRepository _db;
        
        public UserController(IUserRepository r)
        {
            _db = r;
        }

        [HttpGet]
        public User Get()
        {
            var defUser = _db.GetUsers().FirstOrDefault();

            return defUser;
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Update(user);

            return Ok(user);
        }

    }
}