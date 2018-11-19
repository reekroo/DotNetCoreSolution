using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

using Dapper;

using MVCandAngular.Models;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular.Repositories
{
    public class UserRepository : IUserRepository
    {
        private string connectionString;

        public UserRepository(string conn)
        {
            connectionString = conn;
        }

        public List<User> GetUsers()
        {
            List<User> users = new List<User>();

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                users = db.Query<User>("SELECT * FROM Users").ToList();
            }

            return users;
        }

        public User Get(int id)
        {
            User user = null;

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                user = db.Query<User>("SELECT * FROM Users WHERE Id = @id", new { id }).FirstOrDefault();
            }

            return user;
        }

        public void Create(User user)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "INSERT INTO Users (FirstName, LastName) VALUES(@FirstName, @LastName); SELECT CAST(SCOPE_IDENTITY() as int)";
                int? userId = db.Query<int>(sqlQuery, user).FirstOrDefault();
                user.Id = userId ?? 0;
            }
        }

        public void Update(User user)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "UPDATE Users SET FirstName = @FirstName, LastName = @LastName WHERE Id = @Id";
                db.Execute(sqlQuery, user);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "DELETE FROM Users WHERE Id = @id";
                db.Execute(sqlQuery, new { id });
            }
        }
    }
}
