using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Controllers
{
    [Route("api/shop")]
    public class ShopController : Controller
    {
        private IProductRepository _db;

        public ShopController(IProductRepository repo)
        {
            _db = repo;
        }
        
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _db.GetProducts();
        }

        [HttpGet("{id}")]
        public Product Get(int id)
        {
            Product product = _db.Get(id);
            return product;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Create(product);

            return Ok(product);
        }
    }
}