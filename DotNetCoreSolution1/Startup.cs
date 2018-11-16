using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetCoreSolution1.Middleware;
using DotNetCoreSolution1.Services;
using DotNetCoreSolution1.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace DotNetCoreSolution1
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            //Transient: при каждом обращении к сервису создается новый объект сервиса.
            //В течение одного запроса может быть несколько обращений к сервису, 
            //соответственно при каждом обращении будет создаваться новый объект.
            //Подобная модель жизненного цикла наиболее подходит для легковесных сервисов, 
            //которые не хранят данных о состоянии
            services.AddTransient<IMessager, EMailMessager>();

            //Scoped: для каждого запроса создается свой объект сервиса.
            //То есть если в течение одного запроса есть несколько обращений к одному сервису, 
            //то при всех этих обращениях будет использоваться один и тот же объект сервиса.
            services.AddScoped<TimerService>();

            //Singleton: объект сервиса создается при первом обращении к нему, 
            //все последующие запросы используют один и тот же ранее созданный объект сервиса
            services.AddSingleton<MessageService>();

            //services.AddTransient<ICounter, RandomCounter>();
            //services.AddTransient<CounterService>();
            ////MessageMiddlewareService - значения разные

            //services.AddScoped<ICounter, RandomCounter>();
            //services.AddScoped<CounterService>();
            ////MessageMiddlewareService - значения одинаковые

            services.AddSingleton<ICounter, RandomCounter>();
            services.AddSingleton<CounterService>();
            //MessageMiddlewareService - значения одинаковые и живут все время. синглтон епта.)
        }

        //public void Configure(IApplicationBuilder app, IHostingEnvironment env, IMessager messager, Timer timer)
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, MessageService messager, TimerService timer)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMiddleware<CounterMiddleware>();
            app.UseMiddleware<MessageMiddlewareService>();

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync(messager.Send() + "   " + "time now" + "  " + timer.GetTime());

                var sender = context.RequestServices.GetService<MessageService>(); //null если сервис не добавлен

                await context.Response.WriteAsync(sender.Send() + "   ");

                var sender1 = context.RequestServices.GetRequiredService<MessageService>(); //error если сервис не добавлен

                await context.Response.WriteAsync(sender1.Send() + "   ");

            });
        }
    }
}
