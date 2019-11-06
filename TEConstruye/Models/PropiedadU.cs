using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class PropiedadU
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Bathroom { get; set; }
        public string Type { get; set; }
        public int LotArea { get; set; }
        public int BuiltArea { get; set; }
        public bool Pools { get; set; }
        public bool Parkings { get; set; }
        public int Floors { get; set; }
        public int Rooms { get; set; }
        public int Price { get; set; }
        public bool Gym { get; set; }
        public string Location { get; set; }
        public string Descripcion { get; set; }
        public string Cover { get; set; }
    }
}