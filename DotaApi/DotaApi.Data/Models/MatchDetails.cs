namespace DotaApi.Data.Models
{
    using System.Collections.Generic;

    public class MatchDetails
    {
        public long Id { get; set; }

        public bool Winner { get; set; }

        public int RadiantScore { get; set; }

        public int DireScore { get; set; }

        public int Duration { get; set; }

        public string DurationInMinutes => (this.Duration / 60) + " " + "minutes";

        public IEnumerable<TeamPlayerDetails> Players { get; set; }
    }
}
