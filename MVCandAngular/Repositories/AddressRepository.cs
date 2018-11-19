using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

using Dapper;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Repositories
{
    public class AddressRepository : IAddressRepository
    {
        private string connectionString;

        public AddressRepository(string conn)
        {
            connectionString = conn;
        }

        public List<Address> GetAddresses()
        {
            List<Address> addresses = new List<Address>();

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                addresses = db.Query<Address>("SELECT * FROM Address").ToList();
            }

            return addresses;
        }

        public Address Get(int id)
        {
            Address address = null;

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                address = db.Query<Address>("SELECT * FROM Address WHERE Id = @id", new { id }).FirstOrDefault();
            }

            return address;
        }

        public void Create(Address address)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "INSERT INTO Address (UserId, Phone, FullAddress) VALUES(@UserId, @Phone, @FullAddress); SELECT CAST(SCOPE_IDENTITY() as int)";
                int? userId = db.Query<int>(sqlQuery, address).FirstOrDefault();
                address.Id = userId ?? 0;
            }
        }

        public void Update(Address address)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "UPDATE Address SET UserId = @UserId, Phone = @Phone, FullAddress = @FullAddress WHERE Id = @Id";
                db.Execute(sqlQuery, address);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "DELETE FROM Address WHERE Id = @id";
                db.Execute(sqlQuery, new { id });
            }
        }
    }
}
