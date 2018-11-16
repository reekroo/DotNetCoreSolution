using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DotNetCoreSolution2
{
    public class StartupXML
    {
        // свойство, которое будет хранить конфигурацию
        public IConfiguration AppConfiguration { get; set; }

        public StartupXML(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddXmlFile("conf.xml")
                .AddXmlFile("my-conf.xml"); //identical properties overrides properties in conf.json

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

                await context.Response.WriteAsync($"<p style='color:{AppConfiguration["color"]};'>{AppConfiguration["namespace:Texts:currentText"]}</p>");

            });
        }
    }
}
