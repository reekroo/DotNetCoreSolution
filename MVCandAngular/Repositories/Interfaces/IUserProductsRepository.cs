using System.Collections.Generic;

using MVCandAngular.Models;

namespace MVCandAngular.Repositories.interfaces
{
    public interface IUserProductsRepository
    {
        List<UserProducts> GetUserProducts();
        UserProducts Get(int id);
        void Create(UserProducts userProducts);
        void Delete(int id);
        void Update(UserProducts userProducts);
    }
}
