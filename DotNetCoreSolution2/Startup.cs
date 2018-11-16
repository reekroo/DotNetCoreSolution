using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DotNetCoreSolution2
{
    public class Startup
    {
        // свойство, которое будет хранить конфигурацию
        public IConfiguration AppConfiguration { get; set; }

        public Startup()
        {
            var builder = new ConfigurationBuilder()
                                .AddInMemoryCollection(new Dictionary<string, string>
                                {
                                    {"firstname", "Tom"},
                                    {"lastname", "Todd"},
                                    {"age", "31"}
                                });

            // создаем конфигурацию
            AppConfiguration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Run(async (context) =>
            {
                context.Response.ContentType = "text/html;charset=utf-8";

                await context.Response.WriteAsync($"{AppConfiguration["firstname"]} {AppConfiguration["lastname"]} {AppConfiguration["sex"]} <br>");

                AppConfiguration["firstname"] = "alice";
                AppConfiguration["sex"] = "female";

                await context.Response.WriteAsync($"{AppConfiguration["firstname"]} {AppConfiguration["lastname"]} {AppConfiguration["sex"]} <br>");

            });
        }
    }
}
