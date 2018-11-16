using DotNetCoreSolution1.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSolution1.Services
{
    public class MessageMiddlewareService
    {
        RequestDelegate _next;

        public MessageMiddlewareService(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context, MessageService messager)
        {
            await context.Response.WriteAsync(messager.Send() + "   ");

            await _next(context);
        }
    }
}
