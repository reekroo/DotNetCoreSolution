using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

using Dapper;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Repositories
{
    public class UserProductsRepository : IUserProductsRepository
    {
        private string connectionString;

        public UserProductsRepository(string conn)
        {
            connectionString = conn;
        }

        public List<UserProducts> GetUserProducts()
        {
            List<UserProducts> userProducts = new List<UserProducts>();

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                userProducts = db.Query<UserProducts>("SELECT * FROM UserProducts").ToList();
            }

            return userProducts;
        }

        public UserProducts Get(int id)
        {
            UserProducts userProducts = null;

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                userProducts = db.Query<UserProducts>("SELECT * FROM UserProducts WHERE Id = @id", new { id }).FirstOrDefault();
            }

            return userProducts;
        }

        public void Create(UserProducts userProducts)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "INSERT INTO UserProducts (UserId, ProductId) VALUES(@UserId, @ProductId); SELECT CAST(SCOPE_IDENTITY() as int)";
                int? id = db.Query<int>(sqlQuery, userProducts).FirstOrDefault();
                userProducts.Id = id ?? 0;
            }
        }

        public void Update(UserProducts userProducts)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "UPDATE UserProducts SET UserId = @UserId, ProductId = @ProductId WHERE Id = @Id";
                db.Execute(sqlQuery, userProducts);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "DELETE FROM UserProducts WHERE Id = @id";
                db.Execute(sqlQuery, new { id });
            }
        }
    }
}
