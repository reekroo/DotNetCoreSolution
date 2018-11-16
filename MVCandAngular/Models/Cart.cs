using System.Collections.Generic;

namespace MVCandAngular.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public List<Product> products{ get; set; }
    }
}
