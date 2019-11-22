using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

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

    public class PropiedadTec
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


    public class Property
    {
        public string name { get; set; }
        public int restroom { get; set; }
        public int location { get; set; }
        //public int TipoPropiedad { get; set; }
        public int lotarea { get; set; }
        public int builtarea { get; set; }
        public Boolean pools { get; set; }
        public Boolean guestparking { get; set; }
        public Boolean parking { get; set; }
        public int floors { get; set; }
        public int rooms { get; set; }
        public int price { get; set; }
        public string client { get; set; }
        public Boolean gym { get; set; }
        
        //public string Descripcion { get; set; }
    }
}