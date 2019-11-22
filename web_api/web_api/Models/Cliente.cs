using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace web_api.Models
{
    /**
     * Modelo Cliente 
     **/
    public class Cliente
    {
        public string Username { get; set; }
        public string Nombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public int Cedula { get; set; }
        public string PerfilCliente { get; set; }
        public string Nacionalidad { get; set; }
    }

    public class ClienteU
    {
        
        public string Username { get; set; }
        public string Correo { get; set; }
        public string Contrasena { get; set; }
        public string Nombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public int Cedula { get; set; }
        public string PerfilCliente { get; set; }
        public int Nacionalidad { get; set; }
        public System.DateTime FechaIngreso { get; set; }
    }
    public class Client
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