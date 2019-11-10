using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class Bill
    {
        public string  provider{ get; set; }
        public int billnumber { get; set; }
        public string billphoto { get; set; }
        public int idstage { get; set; }
    }
}