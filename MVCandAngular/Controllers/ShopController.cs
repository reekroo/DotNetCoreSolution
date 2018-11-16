using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;

namespace MVCandAngular.Controllers
{
    [Route("api/shop")]
    public class ShopController : Controller
    {
        private ApplicationContext _db;

        public ShopController(ApplicationContext context)
        {
            _db = context;

            if (!_db.Products.Any())
            {
                _db.Products.Add(new Product { Name = "iPhone X", Company = "Apple", Price = 79900 });
                _db.Products.Add(new Product { Name = "Galaxy S8", Company = "Samsung", Price = 49900 });
                _db.Products.Add(new Product { Name = "Pixel 2", Company = "Google", Price = 52900 });

                _db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _db.Products.ToList();
        }

        [HttpGet("{id}")]
        public Product Get(int id)
        {
            Product product = _db.Products.FirstOrDefault(x => x.Id == id);
            return product;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Products.Add(product);
            _db.SaveChanges();

            return Ok(product);
        }
    }
}