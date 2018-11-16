using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSolution1.Services
{
    public class TimerService
    {
        public string GetTime() => DateTime.Now.ToString();
    }
}
