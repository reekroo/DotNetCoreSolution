using DotNetCoreSolution1.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSolution1.Services
{
    public class SmsMessager : IMessager
    {
        public string Send()
        {
            return "sent by sms";
        }
    }
}
