using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace DotNetCoreSolution
{
    public class TokenMiddleware
    {
        private RequestDelegate _next;
        private string _pattern;

        public TokenMiddleware(RequestDelegate next, string pattern)
        {
            _next = next;
            _pattern = pattern;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var token = context.Request.Query["token"];

            if(token != _pattern)
            {
                context.Response.StatusCode = 403;

                await context.Response.WriteAsync("Token is not correct");
            }
            else
            {
                await _next(context);
            }
        }
    }

    public static class TokenExtensions
    {
        public static IApplicationBuilder UseToken(this IApplicationBuilder builder, string pattern)
        {
            return builder.UseMiddleware<TokenMiddleware>(pattern);
        }
    }
}
