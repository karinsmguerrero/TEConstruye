using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class Client
    {
        public int id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public int telephone { get; set; }
        public string firstname { get; set; }
        public string lastnamea { get; set; }
        public string lastnameb { get; set; }

    }

    public class ClientAux
    {
        public int id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string telephone { get; set; }
        public string firstname { get; set; }
        public string lastnamea { get; set; }
        public string lastnameb { get; set; }
        public string status { get; set; }

    }
}