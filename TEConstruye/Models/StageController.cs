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
    public class StageController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        [HttpGet]
        [Route("api/GetStagesType")]
        public HttpResponseMessage GetStagesType()
        {


            conn.Open();
            // Retrieve all rows

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT id, name, description, def " +
                " FROM public.stage_type", conn);
            DataSet list = new DataSet();
            // adapter.Fill(list, "stage_type");
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }




        [HttpPost]
        [Route("api/PostStageType")]
        public HttpResponseMessage InsertStageType([FromBody] Stage stage)
        {

            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand(
                "INSERT INTO stage_type(name,description,def)" +
                 "VALUES(:name, :description, false)", conn);
            cmd.Parameters.AddWithValue("name", stage.name);
            cmd.Parameters.AddWithValue("description", stage.description);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }
    }
}
