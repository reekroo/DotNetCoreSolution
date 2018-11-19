using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Controllers
{
    [Route("api/products")]
    public class ProductController : Controller
    {
        private IProductRepository _db;

        public ProductController(IProductRepository repo)
        {
            _db = repo;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _db.GetProducts().ToList();
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

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Update(product);

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Product product = _db.Get(id);

            if (product == null)
            {
                return BadRequest(ModelState);
            }

            _db.Delete(id);

            return Ok(product);
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            var products = _db.GetProducts();

            foreach (var product in products)
            {
                _db.Delete(product.Id);
            }

            return Ok(new List<Product>());
        }
    }
}