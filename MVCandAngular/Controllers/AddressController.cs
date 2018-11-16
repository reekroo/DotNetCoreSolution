using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;

namespace MVCandAngular.Controllers
{
    [Route("api/address")]
    public class AddressController : Controller
    {
        private ApplicationContext _db;

        public AddressController(ApplicationContext context)
        {
            _db = context;

            if (!_db.Address.Any())
            {
                _db.Address.Add(new Address { UserId = 1, FullAddress = "address_1", Phone = "123123123" });
                _db.SaveChanges();
            }
        }

        [HttpGet]
        public List<Address> Get()
        {
            return _db.Address.ToList();
        }

        [HttpGet("{id}")]
        public Address Get(int id)
        {
            return _db.Address.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Address.Add(address);
            _db.SaveChanges();

            return Ok(address);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Update(address);
            _db.SaveChanges();

            return Ok(address);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var address = _db.Address.FirstOrDefault(x => x.Id == id);

            if (address == null)
            {
                return BadRequest(ModelState);
            }

            _db.Address.Remove(address);
            _db.SaveChanges();

            return Ok(address);
        }

    }
}