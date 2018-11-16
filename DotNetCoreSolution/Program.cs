using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace DotNetCoreSolution
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //1
            CreateWebHostBuilder(args).Build().Run();

            //2
            //var host = new WebHostBuilder()
            //        .UseKestrel() 
            //        .UseContentRoot(Directory.GetCurrentDirectory())
            //        .UseIISIntegration() //запрос сперва сюда (прокси) и передача запроса на кестрал
            //        .UseStartup<Startup>()
            //        .Build();

            //host.Run();

            //3
            //using (var host = WebHost.Start("http://localhost:8088", context => context.Response.WriteAsync("bla-bla-bla")))
            //{
            //    System.Console.WriteLine("console");
            //    host.WaitForShutdown();
            //}
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
                //.UseWebRoot("static");
    }
}
