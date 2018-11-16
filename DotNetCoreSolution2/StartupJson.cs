using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DotNetCoreSolution2
{
    public class StartupJson
    {
        // свойство, которое будет хранить конфигурацию
        public IConfiguration AppConfiguration { get; set; }

        public StartupJson(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("conf.json")
                .AddJsonFile("my-conf.json"); //identical properties overrides properties in conf.json

            // создаем конфигурацию
            AppConfiguration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app)
        {
            app.Run(async (context) =>
            {
                context.Response.ContentType = "text/html;charset=utf-8";

                if(!string.IsNullOrEmpty(AppConfiguration["namespace:Texts:currentText"]))
                    await context.Response.WriteAsync($"<p style='color:{AppConfiguration["color"]};'>{AppConfiguration["namespace:Texts:currentText"]}</p>");
                else
                    await context.Response.WriteAsync($"<p style='color:{AppConfiguration["color"]};'>{AppConfiguration["text"]}</p>");


                string con0 = AppConfiguration.GetSection("namespace:Texts:currentText").Value;

                await context.Response.WriteAsync($"<p>{con0} </p>");

                string con1 = AppConfiguration["namespace:Texts:currentText"];

                await context.Response.WriteAsync($"<p>{con1} </p>");

                string con2 = AppConfiguration.GetConnectionString("currentText");

                await context.Response.WriteAsync($"<p>{con2} </p>");

            });
        }
    }
}
