using DotNetCoreSolution1.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSolution1.Services
{
    public class CounterService
    {
        public CounterService(ICounter counter)
        {
            Counter = counter;
        }

        public ICounter Counter { get; set; }
    }
}
