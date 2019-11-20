using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using web_api.Models;

namespace web_api.Controllers
{
    public class PropiedadController : ApiController
    {
        [HttpGet]
        [Route("api/GetPropiedades")]
        public HttpResponseMessage GetInmuebles()
        {
            using (var db = new TecEntities())
            {

                var listaPropiedades = db.Database.SqlQuery<PropiedadU>("SELECT *" +
                    " FROM vPROPIEDADES").ToList();

                return this.Request.CreateResponse(HttpStatusCode.OK, listaPropiedades);
            }
        }

        [HttpGet]  
        [Route("api/GetPropiedad/{id}")]
        public HttpResponseMessage GetPropiedadByID(int id)
        {
            using (var db = new TecEntities())
            {

                var listaPropiedades = db.Database.SqlQuery<PropiedadU>("SELECT *" +
                    " FROM vPROPIEDADES where id = " + id).ToList();

                return this.Request.CreateResponse(HttpStatusCode.OK, listaPropiedades);
            }
        }

        //Código tomado de: https://csharp.hotexamples.com/examples/Npgsql/NpgsqlDataAdapter/Fill/php-npgsqldataadapter-fill-method-examples.html
        [HttpGet]
        [Route("api/getUser")]
        public HttpResponseMessage conectar()
        {
            var connString = "Server=localhost;Port=5432; User Id = postgres;Password = karina;Database = TECres";

            NpgsqlConnection conn = new NpgsqlConnection(connString);

            conn.Close();
            conn.Open();
            // Retrieve all rows
                    
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT username, password, telephone, firstname, lastnamea, " +
                "lastnameb, role, id FROM public.users", conn);
            DataSet testDataSet = new DataSet();
            adapter.Fill(testDataSet, "result_data");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, testDataSet);
        }


        /**
         * Metodo POST
         * Inserta un nuevo tipo de inmueble
         * */
        [HttpPost]
        [Route("api/PostTec")]
        public HttpResponseMessage InsertartInmueble([FromBody] Property p)
        {
            using (var db = new TecEntities())
            {
                SqlParameter[] parameters = new SqlParameter[]
                    {
                        new SqlParameter("@titulo", p.name),new SqlParameter("@cantidadbanos", p.restroom),
                        new SqlParameter("@idubicacion", p.location), new SqlParameter("@TamanoLote", p.lotarea),
                        new SqlParameter("@TamanoPropiedad", p.builtarea), new SqlParameter("@Piscina", p.pools),
                        new SqlParameter("@ParqueoVisitas", p.guestparking), new SqlParameter("@CantidadNiveles", p.floors),
                        new SqlParameter("@Parqueo", p.parking),new SqlParameter("@CantidadHabitaciones", p.rooms),
                        new SqlParameter("@Precio", p.price),new SqlParameter("@Propietario", p.client),
                        new SqlParameter("@Gimnasio", p.gym)

                    };

                var status = db.Database.ExecuteSqlCommand("INSERT INTO PROPIEDAD(Titulo,CantidadBanos,IdUbicacion," +
                    "TamanoLote,TamanoPropiedad,Piscina,ParqueoVisitas,CantidadNiveles,Parqueo,Precio,CantidadHabitaciones," +
                    "Propietario,Gimnasio) " +
                    "VALUES(@titulo,@cantidadbanos,@idubicacion,@TamanoLote,@TamanoPropiedad,@Piscina,@ParqueoVisitas," +
                    "@CantidadNiveles,@Parqueo,@Precio,@CantidadHabitaciones,@Propietario,@Gimnasio)" +
                    "", parameters);

                return this.Request.CreateResponse(HttpStatusCode.OK, status);
            }
        }
    }
}
