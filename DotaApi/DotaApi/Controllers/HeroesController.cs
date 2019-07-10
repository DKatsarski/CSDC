using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotaApi.Data.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DotaApi.Controllers
{
    public class HeroesController : Controller
    {
        private readonly IFetchData fetchData;
        public HeroesController(IFetchData fetchData)
        {
            this.fetchData = fetchData;
        }

        public IActionResult Index(long id)
        {
            var heroDetails = this.fetchData.GetHeroDetails(id);
            return View(heroDetails);
        }
    }
}