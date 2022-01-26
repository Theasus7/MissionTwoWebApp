using Microsoft.AspNetCore.Mvc;
using MissionOneWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MissionOneWebApp.Controllers
{
    public class CoolBeansController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult gradeCalculator ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult gradeCalculator (GradeCalculator model)
        {
            return View();
        }
    }
}
