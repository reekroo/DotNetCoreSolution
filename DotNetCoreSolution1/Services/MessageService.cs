using DotNetCoreSolution1.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSolution1.Services
{
    public class MessageService
    {
        IMessager _messager;

        public MessageService(IMessager messager)
        {
            _messager = messager;
        }

        public string Send()
        {
            return _messager.Send();
        }
    }
}
