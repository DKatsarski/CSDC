using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace DotaApi.Data.Models.Players
{
    public class PlayerPorfileDetails
    {
        [JsonProperty("account_id")]
        public long Id { get; set; }
        [JsonProperty("personaname")]
        public string Name { get; set; }
        [JsonProperty("avatar")]
        public string Avatar { get; set; }

         
     
     
        //"avatarmedium"
        //"avatarfull" 
        //"profileurl" 
        //"last_login" 
        //"loccountrycode" 
        //"is_contributor" 
    }
}
