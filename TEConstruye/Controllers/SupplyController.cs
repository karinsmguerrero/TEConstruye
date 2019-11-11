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
    public class SupplyController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
        [HttpGet]
        [Route("api/GetSupplies")]
        public HttpResponseMessage GetSupplies()
        {

            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT id, name, price " +
                " FROM public.supplies", conn);
            DataSet list = new DataSet();
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }


        [HttpPost]
        [Route("api/PostSupply")]
        public HttpResponseMessage InsertSupply([FromBody] Supply supply)
        {

            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand(
                "INSERT INTO supplies(name,price)" +
                 "VALUES(:name, :price)", conn);
            System.Diagnostics.Debug.WriteLine("Setted big query");
            cmd.Parameters.AddWithValue("name", supply.name);
            cmd.Parameters.AddWithValue("price", supply.price);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }
    }
}
