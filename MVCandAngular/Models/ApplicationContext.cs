using Microsoft.EntityFrameworkCore;

namespace MVCandAngular.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        { }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<UserProducts> UserProducts { get; set; }

        public DbSet<Address> Address { get; set; }
    }
}