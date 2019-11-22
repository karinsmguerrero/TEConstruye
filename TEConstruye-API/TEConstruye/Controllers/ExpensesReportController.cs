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
    public class ExpensesReportController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        [HttpGet]
        [Route("api/GetExpersesPerWeek/{year}/{week}")]
        public HttpResponseMessage GetProjects(int year, int week)
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select project, expenses from vexpensesreport where year = " + year +
                " and week = " + week, conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "lines");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetWeeksForExpenses/{year}")]
        public HttpResponseMessage GetWeeks(int year)
        {
            conn.Close();
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select distinct week from vexpensesreport where year = " + year, conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "weeks");
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetYearsForExpenses")]
        public HttpResponseMessage GetYears()
        {
            conn.Close();
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select distinct year from vexpensesreport", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "years");
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

    }
}
