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
    public class StageProjectController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        [HttpGet]
        [Route("api/GetStages")]
        public HttpResponseMessage GetStages(int project)
        {


            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT id, stagetype, startdate, enddate " +
                " FROM vStage WHERE idproject="+project+" ORDER BY id", conn);
            DataSet list = new DataSet();
            adapter.Fill(list);
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);
        }




        [HttpPost]
        [Route("api/PostStage")]
        public HttpResponseMessage InsertStage([FromBody] StageProject stage)
        {

            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand(
                "INSERT INTO stage(idproject,stagetype,startdate,enddate)" +
                 "VALUES(:project,:stagetype, :stardate, :enddate)", conn);
            cmd.Parameters.AddWithValue("stagetype", stage.stagetype);
            cmd.Parameters.AddWithValue("project", stage.idproject);
            cmd.Parameters.AddWithValue("stardate", stage.stardate);
            cmd.Parameters.AddWithValue("enddate", stage.enddate);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }
    
    }
}
