using System.Collections.Generic;

using MVCandAngular.Models;

namespace MVCandAngular.Repositories.interfaces
{
    public interface IAddressRepository
    {
        List<Address> GetAddresses();
        Address Get(int id);
        void Create(Address address);
        void Delete(int id);
        void Update(Address address);
    }
}
