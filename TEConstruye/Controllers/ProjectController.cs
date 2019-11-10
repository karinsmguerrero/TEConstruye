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
    public class ProjectController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
        [HttpGet]
        [Route("api/GetProjects")]
        public HttpResponseMessage GetProjects()
        {
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT id, name, lotarea,rooms,restrooms," +
                "floors, builtarea, client_username,client_name," +
                " CONCAT(province, ',', canton,',',district) AS address " +
                "FROM public.vProject", conn);
            DataSet list = new DataSet();
            adapter.Fill(list);
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }
        [HttpGet]
        [Route("api/GetProject")]
        public HttpResponseMessage GetProject(int id)
        {
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT id, name, lotarea,rooms,restrooms," +
                "floors, builtarea, client_username,client_name,"+
              "CONCAT(province, ',', canton, ',', district) AS address "+
              "FROM public.vProject WHERE id="+id, conn);
                
            DataSet ds = new DataSet();
            adapter.Fill(ds,"project");
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);

        }
        [HttpPost]
        [Route("api/PostProject")]
        public HttpResponseMessage AddProject([FromBody] ProjectAux project)
        {
            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand(
                "CALL addProject(:lotarea,:builtarea,:rooms,:restrooms," +
                ":floors,:client,:province,:canton,:district)", conn);
            cmd.Parameters.AddWithValue("name", project.name);
            cmd.Parameters.AddWithValue("lotarea", project.lotarea);
            cmd.Parameters.AddWithValue("builtarea", project.builtarea);
            cmd.Parameters.AddWithValue("rooms", project.rooms);
            cmd.Parameters.AddWithValue("restrooms", project.restrooms);
            cmd.Parameters.AddWithValue("floors", project.floors);
            cmd.Parameters.AddWithValue("client", project.client);
            cmd.Parameters.AddWithValue("province",project.province);
            cmd.Parameters.AddWithValue("canton",project.canton);
            cmd.Parameters.AddWithValue("district",project.district);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }
    }
}
