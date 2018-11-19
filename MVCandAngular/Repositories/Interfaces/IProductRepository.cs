using System.Collections.Generic;

using MVCandAngular.Models;

namespace MVCandAngular.Repositories.interfaces
{
    public interface IProductRepository
    {
        List<Product> GetProducts();
        Product Get(int id);
        void Create(Product product);
        void Delete(int id);
        void Update(Product product);
    }
}
