using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class Location
    {
        public int id { get; set; }
        public string province { get; set; }
        public string canton { get; set; }
        public string district { get; set; }
    }
}