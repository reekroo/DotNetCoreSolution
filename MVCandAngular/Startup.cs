using System.IO;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;

using Microsoft.EntityFrameworkCore;
using MVCandAngular.Models;

using Microsoft.Extensions.DependencyInjection;

using MVCandAngular.Repositories;
using MVCandAngular.Repositories.interfaces;

namespace MVCandAngular
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb;Database=productsdb;Trusted_Connection=True;User ID=BY-MINSK\\PavelDavidovsky;Password=334242343qweASS16";

            //services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connectionString));

            services.AddTransient<IUserRepository, UserRepository>(provider => new UserRepository(connectionString));
            services.AddTransient<IProductRepository, ProductRepository>(provider => new ProductRepository(connectionString));
            services.AddTransient<IUserProductsRepository, UserProductsRepository>(provider => new UserProductsRepository(connectionString));
            services.AddTransient<IAddressRepository, AddressRepository>(provider => new AddressRepository(connectionString));

            services.AddMvc();
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = false
                });
            }

            app.UseStaticFiles();
            app.UseMvc();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    "angular-fallback",
                    new { controller = "Home", action = "Index" });
            });

            app.Run(async (context) =>
            {
                context.Response.ContentType = "text/html";
                await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
            });
        }
    }
}
