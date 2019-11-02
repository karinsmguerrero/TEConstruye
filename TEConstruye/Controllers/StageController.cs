using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Npgsql;

namespace TEConstruye.Controllers
{
    public class StageController : ApiController
    {
        [HttpGet]
        [Route("api/getUser")]
        public HttpResponseMessage conectar()
        {
            var connString = "Server=localhost;Port=50329; User Id = postgres;Password = admin;Database = TEConstruye";

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
        [HttpGet]
        [Route("api/GetStages")]
        public HttpResponseMessage GetAdmins()
        {
            var connString = "Server=127.0.0.1;User Id=postgres; Password=admin;Database=TEConstruye;";
            NpgsqlConnection conn = new NpgsqlConnection(connString);
            try
            {
                conn.Open();
                Console.WriteLine("WORKS");
                conn.Close();
                return this.Request.CreateResponse(HttpStatusCode.OK, "WORKS");

            }
            catch (Exception ex)
            {

                Console.WriteLine(ex);
                conn.Close();
                return this.Request.CreateResponse(HttpStatusCode.OK, "Fail");
            }

            return this.Request.CreateResponse(HttpStatusCode.OK, "Fail");

        }
    }





}
