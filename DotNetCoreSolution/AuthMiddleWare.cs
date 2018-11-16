using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace DotNetCoreSolution
{
    public class AuthMiddleware
    {
        private RequestDelegate _next;

        public AuthMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        
        public async Task InvokeAsync(HttpContext context)
        {
            var token = context.Request.Query["token"];

            if (string.IsNullOrEmpty(token))
            {
                context.Response.StatusCode = 403;
            }
            else
            {
                await _next(context);
            }
        }
    }
}
