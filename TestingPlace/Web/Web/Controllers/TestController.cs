using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Models.Test;

namespace Web.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(TestModel testModel)
        {
            if (ModelState.IsValid)
            {
                return this.Json(testModel);

            }
            else
            {
                return this.View(testModel);
            }
        }
    }
}