using DotNetCoreSolution1.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSolution1.Services
{
    public class RandomCounter : ICounter
    {
        private int _value;

        private static Random rnd = new Random();

        public RandomCounter()
        {
            _value = rnd.Next(0, 11001010);
        }

        public int Value { get { return _value; } }
    }
}
