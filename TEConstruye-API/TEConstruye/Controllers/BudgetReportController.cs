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
    public class BudgetReportController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        //Código tomado de: https://csharp.hotexamples.com/examples/Npgsql/NpgsqlDataAdapter/Fill/php-npgsqldataadapter-fill-method-examples.html
        [HttpGet]
        [Route("api/GetBudget")]
        public HttpResponseMessage GetBudget()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select * from budget_view", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");
           
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetProjectWithBudget")]
        public HttpResponseMessage GetProjectWithBudget()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select  project.name from stage join project on" + 
                " stage.idproject = project.id group by project.name", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetStageBudget/{project}")]
        public HttpResponseMessage GetStageBudget(string project)
        {
            conn.Close();
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select stage, budget from budget_view where project='" + project + "'", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

    }
}
