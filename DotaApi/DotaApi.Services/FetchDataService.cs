namespace DotaApi.Services
{
    using DotaApi.Data.Interfaces;
    using DotaApi.Data.Models;
    using DotaApi.Data.Models.Players;
    using DotaApi.Data.Models.Heroes;
    using Newtonsoft.Json;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;

    public class FetchDataService : IFetchData
    {

        public IEnumerable<Match> GetMatches()
        {
            var json = string.Empty;

            using (var client = new WebClient())
            {
                json = client.DownloadString("http://192.168.50.35/matches");
            }

            var matches = JsonConvert.DeserializeObject<Match[]>(json)
                .Take(20);

            return matches;
        }

        public MatchDetails GetMatchDetailsById(long id)
        {
            var json = string.Empty;

            using (var client = new WebClient())
            {
                json = client.DownloadString($"http://192.168.50.35/matches/{id}");
            }

            var mathcDetails = JsonConvert.DeserializeObject<MatchDetails>(json);

            return mathcDetails;
        }

        public Player GetPlayerDetails(long id)
        {
            var json = string.Empty;
            var heroes = string.Empty;

            using (var client = new WebClient())
            {
                json = client.DownloadString($"https://api.opendota.com/api/players/{id}");
                heroes = client.DownloadString($"https://api.opendota.com/api/players/{id}/heroes");
            }

            var playerDetails = JsonConvert.DeserializeObject<Player>(json);
            playerDetails.Heroes = JsonConvert.DeserializeObject<Hero[]>(heroes)
                .OrderByDescending(x => x.Win);


            return playerDetails;
        }

        public Hero GetHeroDetails(long id)
        {
            var json = string.Empty;
            var heroes = string.Empty;

            using (var client = new WebClient())
            {
                json = client.DownloadString($"https://api.opendota.com/api/players/{id}");
                heroes = client.DownloadString($"https://api.opendota.com/api/players/{id}/heroes");
            }

            var playerDetails = JsonConvert.DeserializeObject<Player>(json);
            playerDetails.Heroes = JsonConvert.DeserializeObject<Hero[]>(heroes);

            var hero = playerDetails.Heroes.FirstOrDefault(x => x.Id == id);


            return hero;
        }
    }
}
