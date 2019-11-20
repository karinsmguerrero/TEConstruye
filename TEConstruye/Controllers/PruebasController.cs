using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using TEConstruye.Models;

namespace TEConstruye.Controllers
{
    public class PruebasController : ApiController
    {
        
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        //Código tomado de: https://csharp.hotexamples.com/examples/Npgsql/NpgsqlDataAdapter/Fill/php-npgsqldataadapter-fill-method-examples.html
        [HttpGet]
        [Route("api/GetStages")]
        public HttpResponseMessage GetEmployees()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select distinct name from stage_type", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "users");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetProjects")]
        public HttpResponseMessage GetProjects()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select id from project", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }
        //Codigo tomado de: https://forums.asp.net/t/2062908.aspx?Call+One+Web+API+to+another+Web+API
        [HttpGet]
        [Route("api/CallTECres")]
        public HttpResponseMessage CallTECres()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:53618");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = client.GetAsync("/api/GetPropiedades").Result;
                if (response.IsSuccessStatusCode)
                {
                    string responseString = response.Content.ReadAsStringAsync().Result;
                    var modelObject = response.Content.ReadAsAsync<PropiedadU[]>().Result;
                    return this.Request.CreateResponse(HttpStatusCode.OK, modelObject);
                }
            }
            return this.Request.CreateResponse(HttpStatusCode.OK, "TERMINATED. NO RESPONSE.");
        }
        
    }
}
