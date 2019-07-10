namespace DotaApi.Data.Models
{
    public class Match
    {
        public long Id { get; set; }

        public int GameMode { get; set; }

        public bool Result { get; set; }

        public int Duration { get; set; }

        public string DurationInMinutes => (this.Duration / 60) + " " + "minutes";
    }
}