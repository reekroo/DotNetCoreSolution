using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Routing.Constraints;
using Microsoft.Extensions.DependencyInjection;

namespace DotNetCore_Mapping
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRouting();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            var myRouteHandler = new RouteHandler(Handle); // определяем обработчик маршрута
            var routeBuilder = new RouteBuilder(app, myRouteHandler); // создаем маршрут, используя обработчик
                        
            //routeBuilder.MapRoute("default", "{controller}/{action}"); // само определение маршрута - он должен соответствовать запросу {controller}/{action}

            routeBuilder.MapRoute(
                "{controller}/{action}/{id}",
                async context => {
                    context.Response.ContentType = "text/html; charset=utf-8";
                    await context.Response.WriteAsync("трехсегментный запрос");
                }
            );

            routeBuilder.MapRoute("store/{action}",             // store - статический сегмент
                async context => {
                    context.Response.ContentType = "text/html; charset=utf-8";
                    await context.Response.WriteAsync("статика");
                }); 
                       
            routeBuilder.MapRoute(
                "default",
                "{controller}/{action}/{id?}/{*catchall}",      // id - не обязательный сегмент
                                                                // catchall будет соответствовать всем тем сегментам строки запроса, которые будут идти после id
                new { controller = "home", action = "index" }   // дефолтные значения
            );

            //другой способ задачи дефолтных параметров
            //routeBuilder.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");

            //префиксы(Ru) и постфиксы(-en)
            //routeBuilder.MapRoute("default", "Ru{controller=Home}/{action=Index}-en/{id?}");

            //несколько параметров в сегменте
            //routeBuilder.MapRoute("default", "{controller=Home}/{action=Index}/{name}-{year}");


            //премер ограничений
            //routeBuilder.MapRoute(
            //    "default",
            //    "{controller}/{action}/{id?}",
            //    new { action = "Index" },                   // параметры по умолчанию
            //    new { controller = "^H", id = @"\d{2}" },   // ограничения
            //    new { httpMethod = new HttpMethodRouteConstraint("POST") }
            //);

            app.UseRouter(routeBuilder.Build()); // строим маршрут

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }

        private async Task Handle(HttpContext context)
        {
            context.Response.ContentType = "text/html; charset=utf-8";
            await context.Response.WriteAsync("двухсегментный запрос");
        }
    }
}
