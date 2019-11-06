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
    public class LocationController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
        [HttpGet]
        [Route("api/GetProvince")]
        public HttpResponseMessage GetProvince()
        {


            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT DISTINCT province " +
                " FROM location", conn);
            DataSet list = new DataSet();
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }

        [HttpGet]
        [Route("api/GetCanton")]
        public HttpResponseMessage GetCanton(string Province)
        {
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT DISTINCT canton " +
                " FROM location WHERE province='" + Province + "'", conn);
            DataSet list = new DataSet();
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);
        }

        [HttpGet]
        [Route("api/GetDistrict")]
        public HttpResponseMessage GetDistrict(string Province, string Canton)
        {
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT district " +
                " FROM location WHERE province='" + Province + "' and canton='" + Canton + "';", conn);
            DataSet list = new DataSet();
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);
        }
    }
}
