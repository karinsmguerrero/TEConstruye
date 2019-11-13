using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace web_api.Models
{
    public class Propiedad
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public int CantidadBanos { get; set; }
        public int IdUbicacion { get; set; }
        public int TipoPropiedad { get; set; }
        public int TamanoLote { get; set; }
        public int TamanoPropiedad { get; set; }
        public bool Piscina { get; set; }
        public bool ParqueoVisitas { get; set; }
        public bool Parqueo { get; set; }
        public int TipoPiso { get; set; }
        public Nullable<int> CantidadNiveles { get; set; }
        public int CantidadHabitaciones { get; set; }
        public int Precio { get; set; }
        public string Propietario { get; set; }
        public Nullable<bool> Gimnasio { get; set; }
    }


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