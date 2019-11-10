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
    public class ClientsController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        //Código tomado de: https://csharp.hotexamples.com/examples/Npgsql/NpgsqlDataAdapter/Fill/php-npgsqldataadapter-fill-method-examples.html
        [HttpGet]
        [Route("api/GetClients")]
        public HttpResponseMessage GetClients()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select username, password, telephone, firstname,lastnamea," +
                "lastnameb, id from public.users where role = 'Constructor'", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "users");
            

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
            
        }

        [HttpPost]
        [Route("api/PostClient")]
        public HttpResponseMessage InsertClient([FromBody] Client newClient)
        {
            System.Diagnostics.Debug.WriteLine("Got a post request");
            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand("INSERT INTO public.users (username, password,  firstname, lastnamea, lastnameb, role,telephone, id) " +
                "VALUES (:username,:password,:firstname,:lastnamea,:lastnameb,'Constructor',:telephone,:id)", conn);
            cmd.Parameters.AddWithValue("username", newClient.username);
            cmd.Parameters.AddWithValue("firstname", newClient.firstname);
            cmd.Parameters.AddWithValue("lastnamea", newClient.lastnamea);
            cmd.Parameters.AddWithValue("lastnameb", newClient.lastnameb);
            cmd.Parameters.AddWithValue("telephone", newClient.telephone);
            cmd.Parameters.AddWithValue("password", newClient.password);
            cmd.Parameters.AddWithValue("id", newClient.id);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();

            return this.Request.CreateResponse(HttpStatusCode.OK, "insertado");

        }
    }
}
