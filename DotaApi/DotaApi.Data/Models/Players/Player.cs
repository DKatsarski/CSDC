using DotaApi.Data.Models.Heroes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace DotaApi.Data.Models.Players
{
    public class Player
    {
        [JsonProperty("match_id")]
        public long Id { get; set; }

        [JsonProperty("game_mode")]
        public int GameMode { get; set; }

        [JsonProperty("radiant_win")]
        public bool Result { get; set; }

        [JsonProperty("duration")]
        public int Duration { get; set; }

        [JsonProperty("profile")]
        public PlayerPorfileDetails Profile { get; set; }

        public IEnumerable<Hero> Heroes { get; set; }
    }
}
