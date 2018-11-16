using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace DotNetCoreSolution
{
    public class Startup
    {
        private string text;
        private int y;

        public Startup()
        {
            text = "noname";
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        //public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        //{
        //    int x = 2; //определяется один раз!!!
        //    y = 2;
        //    int z = 2;

        //    if (env.IsDevelopment())
        //    {
        //        app.UseDeveloperExceptionPage();
        //    }

        //    app.Map("/home", home =>
        //    {
        //        home.Map("/my-home", (appBuilder) =>
        //        {
        //            appBuilder.Run(async (context) =>
        //            {
        //                await context.Response.WriteAsync($"My home page");
        //            });
        //        });
        //        home.Map("/consultant-home", (appBuilder) =>
        //        {
        //            appBuilder.Run(async (context) =>
        //            {
        //                await context.Response.WriteAsync($"Consultant home page");
        //            });
        //        });

        //        home.Run(async (context) =>
        //        {
        //            await context.Response.WriteAsync($"Home page");
        //        });
        //    });

        //    app.Map("/index", (appBuilder) => {

        //        appBuilder.Run(async (context) =>
        //        {
        //            await context.Response.WriteAsync($"Index page");
        //        });
        //    });

        //    app.Map("/about", (appBuilder) => About(appBuilder));

        //    app.MapWhen(
        //        context => {
        //            return context.Request.Query.ContainsKey("id") &&
        //            context.Request.Query["id"] == "5";
        //        },
        //        appBuilder => {
        //            appBuilder.Run(async context =>
        //            {
        //                await context.Response.WriteAsync("id is equal to 5");
        //            });
        //        }
        //    );

        //    //all other path

        //    app.Use(async (context, next) => 
        //    {
        //        z = (x + y) * 2;

        //        await context.Response.WriteAsync($"Hello {text}! ");

        //        await next();

        //        z = z + 1;

        //        await context.Response.WriteAsync($"new z = {z}! ");
        //    });

        //    //run - терминальный компанент
        //    app.Run(async (context) =>
        //    {
        //        x *= 2;
        //        y *= 2;


        //        await context.Response.WriteAsync($"Hello {text}! x = {x} and y = {y} and z = {z}! ");

        //        z = 1;
        //    });

        //    //app.Run(context => RunHandle(context));
        //    //app.Run(Handle);
        //}

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseMiddleware<TokenMiddleware>();
            //app.UseToken("12345678");

            DefaultFilesOptions def = new DefaultFilesOptions();
            def.DefaultFileNames.Clear();
            def.DefaultFileNames.Add("home.html");

            app.UseDefaultFiles(def);

            //app.UseDefaultFiles(def); //default.htm / .html || index.htm / .html
            app.UseStaticFiles();

            app.UseMiddleware<ErrorHandlingMiddleware>();
            app.UseMiddleware<AuthMiddleware>();
            app.UseMiddleware<RoutingMiddleware>();

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync($"This page");
            });
        }

        private void About(IApplicationBuilder appBuilder)
        {
            appBuilder.Run(async (context) =>
            {
                await context.Response.WriteAsync($"About page");
            });
        }

        private async Task RunHandle(HttpContext context)
        {
            context.Response.ContentType = "text/html;charset=utf-8";

            string host = context.Request.Host.Value;
            string path = context.Request.Path.Value;
            string query = context.Request.QueryString.Value;

            await context.Response.WriteAsync(
                    $"<ul><li>" +
                    $"{host}</li><li>" +
                    $"{path}</li><li>" +
                    $"{query}" +
                    $"</li></ul>");
        }
    }
}
