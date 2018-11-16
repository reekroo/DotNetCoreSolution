using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCandAngular.Models
{
    public class UserProducts
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
    }
}
