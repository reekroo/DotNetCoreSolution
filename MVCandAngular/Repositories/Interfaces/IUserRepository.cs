using System.Collections.Generic;

using MVCandAngular.Models;

namespace MVCandAngular.Repositories.interfaces
{
    public interface IUserRepository
    {
        List<User> GetUsers();
        User Get(int id);
        void Create(User user);
        void Delete(int id);
        void Update(User user);
    }
}
