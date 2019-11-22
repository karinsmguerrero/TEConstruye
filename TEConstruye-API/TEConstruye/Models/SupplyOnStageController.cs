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
    public class SupplyOnStageController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
        [HttpGet]
        [Route("api/GetSupplyStage")]
        public HttpResponseMessage GetHours(int idstage)
        {

            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT idsupply,supply_name," +
                "quantity,price,total FROM vSuppliesByStage  WHERE idstage=" + idstage, conn);
            DataSet list = new DataSet();
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }


        [HttpPost]
        [Route("api/PostWorkerProject")]
        public HttpResponseMessage InsertSupply([FromBody] SupplyProject supply)
        {

            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand(
                "INSERT INTO supplies_on_project(idsupply,idstage,quantity)" +
                 "VALUES(:idsupply, :idstage,:quantity)", conn);
            cmd.Parameters.AddWithValue("idsupply", supply.idsupply);
            cmd.Parameters.AddWithValue("idstage", supply.idstage);
            cmd.Parameters.AddWithValue("quantity", +supply.quantity);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }
    }
}
