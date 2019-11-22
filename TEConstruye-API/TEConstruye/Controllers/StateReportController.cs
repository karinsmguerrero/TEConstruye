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
    public class StateReportController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        [HttpGet]
        [Route("api/GetStateReport")]
        public HttpResponseMessage GetStateReport()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select * from state_report", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetStageExpensesBudget/{project}")]
        public HttpResponseMessage GetStageBudget(string project)
        {
            conn.Close();
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select stage, budget, expenses from state_report where project = '" + project + "'", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");
            adapter = new NpgsqlDataAdapter("select sum(budget) as total_budget,sum(expenses) as total_expenses" +
                " from state_report group by project having project = '" + project + "'", conn);
            adapter.Fill(ds, "totals");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetProjectWithBudgetAndExpenses")]
        public HttpResponseMessage GetProjectWithBudget()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select distinct project as name from state_report", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetReportTotals/{project}")]
        public HttpResponseMessage GetReportTotals(string project)
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select sum(budget) as total_budget,sum(expenses) as total_expenses" +
                " from state_report group by project having project = '" + project + "'", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "result");


            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }
    }
}
