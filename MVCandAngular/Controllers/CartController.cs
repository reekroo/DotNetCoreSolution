using System.Linq;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Controllers
{
    [Route("api/cart")]
    public class CartController : Controller
    {

        private const int userId = 1;

        private IUserProductsRepository _cartRepo;
        private IProductRepository _prodRepo;

        public CartController(IUserProductsRepository repo, IProductRepository prodRepo)
        {
            _cartRepo = repo;
            _prodRepo = prodRepo;
        }

        [HttpGet]
        public Cart Get()
        {
            var productIds = _cartRepo.GetUserProducts().Where(x => x.UserId == userId);

            if(!productIds.Any())
            {
                return null;
            }

            var a = _cartRepo.GetUserProducts().Where(x => productIds.Any(y => y.ProductId == x.Id)).ToList();

            return new Cart()
            {
                products = _prodRepo.GetProducts().Where(x => productIds.Any(y => y.ProductId == x.Id)).ToList(),
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

            _cartRepo.Create(new UserProducts() { Id = 1, ProductId = product.Id, UserId = userId});
            
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var userProduct = _cartRepo.GetUserProducts().FirstOrDefault(x => x.UserId == userId && x.ProductId == id);

            if (userProduct == null)
            {
                return BadRequest(ModelState);
            }

            _cartRepo.Delete(userProduct.Id);

            return Ok(this.Get());
        }
        
        [HttpDelete]
        public IActionResult Delete()
        {
            var userProducts = _cartRepo.GetUserProducts().Where(x => x.UserId == userId);

            if (userProducts == null)
            {
                return BadRequest(ModelState);
            }

            foreach (var item in userProducts)
            {
                _cartRepo.Delete(item.Id);
            }

            return Ok(this.Get());
        }

    }
}