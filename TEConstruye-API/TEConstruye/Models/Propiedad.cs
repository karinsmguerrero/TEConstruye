using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class Propiedad
    {
        public string Titulo { get; set; }
        public int CantidadBanos { get; set; }
        public int IdUbicacion { get; set; }
        //public int TipoPropiedad { get; set; }
        public int TamanoLote { get; set; }
        public int TamanoPropiedad { get; set; }
        public Boolean Piscina { get; set; }
        public Boolean ParqueoVisitas { get; set; }
        public Boolean Parqueo { get; set; }
        public int CantidadNiveles { get; set; }
        public int CantidadHabitaciones { get; set; }
        public int Precio { get; set; }
        public string Propietario { get; set; }
        public Boolean Gimnasio { get; set; }
        //public string Descripcion { get; set; }
    }
}