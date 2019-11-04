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
    public class LoginController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        //Código tomado de: https://csharp.hotexamples.com/examples/Npgsql/NpgsqlDataAdapter/Fill/php-npgsqldataadapter-fill-method-examples.html
        [HttpPost]
        [Route("api/CheckCredentials")]
        public HttpResponseMessage CheckCredentials([FromBody] Credentials credentials)
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select CheckCredentials('" + credentials.username  + "', '" + credentials.password + "')", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");


            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);

        }
    }
}
