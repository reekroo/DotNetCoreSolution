using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

using Dapper;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private string connectionString;

        public ProductRepository(string conn)
        {
            connectionString = conn;
        }

        public List<Product> GetProducts()
        {
            List<Product> products = new List<Product>();

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                products = db.Query<Product>("SELECT * FROM Products").ToList();
            }

            return products;
        }

        public Product Get(int id)
        {
            Product product = null;

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                product = db.Query<Product>("SELECT * FROM Products WHERE Id = @id", new { id }).FirstOrDefault();
            }

            return product;
        }

        public void Create(Product product)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "INSERT INTO Products (Name, Company, Price) VALUES(@Name, @Company, @Price); SELECT CAST(SCOPE_IDENTITY() as int)";
                int? id = db.Query<int>(sqlQuery, product).FirstOrDefault();
                product.Id = id ?? 0;
            }
        }

        public void Update(Product product)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "UPDATE Products SET Name = @Name, Company = @Company, Price = @Price WHERE Id = @Id";
                db.Execute(sqlQuery, product);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "DELETE FROM Products WHERE Id = @id";
                db.Execute(sqlQuery, new { id });
            }
        }
    }
}
