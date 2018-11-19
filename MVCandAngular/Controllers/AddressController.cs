using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Controllers
{
    [Route("api/address")]
    public class AddressController : Controller
    {
        private IAddressRepository _db;

        public AddressController(IAddressRepository repo)
        {
            _db = repo;
        }

        [HttpGet]
        public List<Address> Get()
        {
            return _db.GetAddresses();
        }

        [HttpGet("{id}")]
        public Address Get(int id)
        {
            return _db.Get(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Create(address);

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

            return Ok(address);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var address = _db.Get(id);

            if (address == null)
            {
                return BadRequest(ModelState);
            }

            _db.Delete(id);

            return Ok(address);
        }

    }
}