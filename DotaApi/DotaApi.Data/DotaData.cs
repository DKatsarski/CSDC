using DotaApi.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DotaApi.Data
{
    public class DotaData
    {
        public IEnumerable<Match> Matches { get; set; }
    }
}
