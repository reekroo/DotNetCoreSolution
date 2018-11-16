using DotNetCoreSolution1.Services;
using DotNetCoreSolution1.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSolution1.Middleware
{
    public class CounterMiddleware
    {
        private int _i = 0;

        public CounterMiddleware(RequestDelegate next)
        {

        }

        public async Task InvokeAsync(HttpContext context, ICounter counter, CounterService counterService)
        {
            _i++;

            await context.Response.WriteAsync($"Request: {_i} " +
                $"ICounter: {counter.Value} " +
                $"$CounterService: {counterService.Counter.Value} ");
        }
    }
}
