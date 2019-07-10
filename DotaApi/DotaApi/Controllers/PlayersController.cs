using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotaApi.Data.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DotaApi.Controllers
{
    public class PlayersController : Controller
    {
        private readonly IFetchData fetchData;

        public PlayersController(IFetchData fetchData)
        {
            this.fetchData = fetchData;
        }

        public IActionResult Index(long id)
        {
            var playerDetails = this.fetchData.GetPlayerDetails(id);
            return View(playerDetails);
        }
    }
}