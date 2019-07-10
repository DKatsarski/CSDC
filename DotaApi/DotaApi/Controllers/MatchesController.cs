namespace DotaApi.Controllers
{
    using DotaApi.Data.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    public class MatchesController : Controller
    {
        private readonly IFetchData fetchData;

        public MatchesController(IFetchData fetchData)
        {
            this.fetchData = fetchData;
        }


        public IActionResult Index()
        {
            var matches = fetchData.GetMatches();

            return View(matches);
        }

        public IActionResult Details(long id)
        {
            var matchDetails = fetchData.GetMatchDetailsById(id);

            return View(matchDetails);
        }
    }
}