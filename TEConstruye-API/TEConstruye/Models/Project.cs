using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class Project
    {
        public string name { get; set; }
        public string address { get; set; }
       
        public int  lotarea { get; set; }
        public int  builtarea { get; set; }
        public int  rooms { get; set; }
        public int  restrooms { get; set; }
        public int  floors { get; set; }
        public string  client { get; set; }
     
    }

    public class ProjectAux
    {
        public string name { get; set; }
        public string province { get; set; }
        public string canton { get; set; }
        public string district { get; set; }
        public int lotarea { get; set; }
        public int builtarea { get; set; }
        public int rooms { get; set; }
        public int restrooms { get; set; }
        public int floors { get; set; }
        public string client { get; set; }

    }
}