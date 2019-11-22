using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TEConstruye.Models;

namespace TEConstruye.Controllers
{
    public class EngineerController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        //Código tomado de: https://csharp.hotexamples.com/examples/Npgsql/NpgsqlDataAdapter/Fill/php-npgsqldataadapter-fill-method-examples.html
        [HttpGet]
        [Route("api/GetEngineers")]
        public HttpResponseMessage GetEngineers()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select users.username, firstname, lastnamea, lastnameb, users.id, code, specialty.name as major, telephone from users inner join worker on users.username = worker.username inner join  specialty on worker.idspecialty = specialty.id", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "users");


            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);

        }

        [HttpGet]
        [Route("api/GetSpecialties")]
        public HttpResponseMessage GetSpecialties()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select name, id from specialty", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "specialties");


            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);

        }

        [HttpPost]
        [Route("api/PostEngineer")]
        public HttpResponseMessage InsertClient([FromBody] Engineer newClient)
        {
            System.Diagnostics.Debug.WriteLine("Got a post request");
            conn.Open();
            System.Diagnostics.Debug.WriteLine("Opened connection");
            NpgsqlCommand cmd = new NpgsqlCommand("with first_insert as (" +
                "insert into users(id, firstname, lastnamea, lastnameb, telephone, role, username, password)" +
                 "values(:id, :firstname, :lastnamea, :lastnameb, :telephone, 'Engineer', :username, :password)" +
                 "RETURNING username)" +
                "insert into worker(username, code, idspecialty)" +
                 "values ((select username from first_insert), :code,GetSpecialtyId(:major))", conn);
            System.Diagnostics.Debug.WriteLine("Set up query");
            cmd.Parameters.AddWithValue("username", newClient.username);
            cmd.Parameters.AddWithValue("firstname", newClient.firstname);
            cmd.Parameters.AddWithValue("lastnamea", newClient.lastnamea);
            cmd.Parameters.AddWithValue("lastnameb", newClient.lastnameb);
            cmd.Parameters.AddWithValue("telephone", newClient.telephone);
            cmd.Parameters.AddWithValue("password", newClient.password);
            cmd.Parameters.AddWithValue("id", newClient.id);
            cmd.Parameters.AddWithValue("code", newClient.code);
            cmd.Parameters.AddWithValue("major", newClient.major);
            System.Diagnostics.Debug.WriteLine("loaded params");
            cmd.Prepare();
            System.Diagnostics.Debug.WriteLine("prepared");
            cmd.CommandType = CommandType.Text;
            System.Diagnostics.Debug.WriteLine("ready set go!");
            cmd.ExecuteNonQuery();
            System.Diagnostics.Debug.WriteLine("executed");

            conn.Close();

            return this.Request.CreateResponse(HttpStatusCode.OK, "insertado");

        }
    }
}
