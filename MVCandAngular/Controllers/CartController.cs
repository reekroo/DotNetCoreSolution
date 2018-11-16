using System.Linq;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;

namespace MVCandAngular.Controllers
{
    [Route("api/cart")]
    public class CartController : Controller
    {

        private const int userId = 1;

        private ApplicationContext _db;

        public CartController(ApplicationContext context)
        {
            _db = context;

            if (!_db.UserProducts.Any())
            {
                _db.UserProducts.Add(new UserProducts { UserId = 1, ProductId = 5 });
                _db.SaveChanges();
            }
        }

        [HttpGet]
        public Cart Get()
        {
            var productIds = _db.UserProducts.Where(x => x.UserId == userId);

            if(!productIds.Any())
            {
                return null;
            }

            var a = _db.Products.Where(x => productIds.Any(y => y.ProductId == x.Id)).ToList();

            return new Cart()
            {
                products = _db.Products.Where(x => productIds.Any(y => y.ProductId == x.Id)).ToList(),
                Id = 1,
                UserId = userId
            };
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.UserProducts.Add(new UserProducts() { Id = 1, ProductId = product.Id, UserId = userId});
            _db.SaveChanges();

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var userProduct = _db.UserProducts.FirstOrDefault(x => x.UserId == userId && x.ProductId == id);

            if (userProduct == null)
            {
                return BadRequest(ModelState);
            }

            _db.UserProducts.Remove(userProduct);
            _db.SaveChanges();

            return Ok(this.Get());
        }
        
        [HttpDelete]
        public IActionResult Delete()
        {
            var userProducts = _db.UserProducts.Where(x => x.UserId == userId);

            if (userProducts == null)
            {
                return BadRequest(ModelState);
            }

            _db.UserProducts.RemoveRange(userProducts);
            _db.SaveChanges();

            return Ok(this.Get());
        }

    }
}