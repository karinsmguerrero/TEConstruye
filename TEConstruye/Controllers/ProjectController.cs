using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TEConstruye.Controllers
{
    public class ProjectController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
        [HttpGet]
        [Route("api/Projects")]
        public HttpResponseMessage GetProjects()
        {
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT id, lotarea,rooms,restrooms," +
                "floors, builtarea, client_username,client_name, province, canton, district" +
                " SELECT CONCAT(province, ',', canton,',',district) AS address FROM public.vProject", conn);
            DataSet list = new DataSet();
            adapter.Fill(list);
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }

        [HttpPut]
        [Route("api/Project")]
        public HttpResponseMessage AddProject()
        {
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT id, lotarea,rooms,restrooms," +
                "floors, builtarea, client_username,client_name, province, canton, district" +
                " SELECT CONCAT(province, ',', canton,',',district) AS address FROM public.vProject", conn);
            DataSet list = new DataSet();
            adapter.Fill(list);
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }
    }
}
