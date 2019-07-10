using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace DotaApi.Data.Models.Heroes
{
    public class Hero
    {
        [JsonProperty("hero_id")]
        public long Id { get; set; }

        [JsonProperty("last_played")]
        public long LastPlayed { get; set; }

        [JsonProperty("games")]
        public int Games { get; set; }

        [JsonProperty("win")]
        public int Win { get; set; }


        [JsonProperty("with_games")]
        public int WithGames { get; set; }

        [JsonProperty("with_win")]
        public int WithWin { get; set; }

        [JsonProperty("against_games")]
        public int AgainstGame { get; set; }

        [JsonProperty("against_win")]
        public int AgainstWin { get; set; }

        [JsonProperty("match_id")]
        public int MatchId { get; set; }




    }
}
