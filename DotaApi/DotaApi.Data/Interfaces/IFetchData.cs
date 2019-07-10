namespace DotaApi.Data.Interfaces
{
    using DotaApi.Data.Models;
    using DotaApi.Data.Models.Heroes;
    using DotaApi.Data.Models.Players;
    using System.Collections.Generic;

    public interface IFetchData
    {
        IEnumerable<Match> GetMatches();

        MatchDetails GetMatchDetailsById(long id);

        Player GetPlayerDetails(long id);

        Hero GetHeroDetails(long id);
    }
}
