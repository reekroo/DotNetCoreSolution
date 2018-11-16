using Microsoft.AspNetCore.Mvc;

namespace MVCandAngular.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
