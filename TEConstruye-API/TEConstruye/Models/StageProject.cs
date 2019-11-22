using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class StageProject
    {
        public int stagetype { get; set; }
        public int idproject { get; set; }
        public System.DateTime stardate { get; set; }
        public System.DateTime enddate { get; set; }
    }
}