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
    public class SalaryReportController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        [HttpGet]
        [Route("api/GetEmployees/{year}/{week}")]
        public HttpResponseMessage GetEmployees(int year, int week)
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select distinct name from vsalaryreport where year = " + year +
                " and week = " + week, conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "employees");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetWeeks/{year}")]
        public HttpResponseMessage GetWeeks(int year)
        {
            conn.Close();
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select distinct week from vsalaryreport where year = " + year, conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "weeks");
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetSalaryLines/{year}/{week}/{name}")]
        public HttpResponseMessage GetSalaryLines(int year, int week, string name)
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select project, total from vsalaryreport where year = " + year +
                " and week = " + week + " and name = '" + name + "'", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "lines");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpGet]
        [Route("api/GetYearsForSalaries")]
        public HttpResponseMessage GetYears()
        {
            conn.Close();
            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select distinct year from vsalaryreport", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "years");
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }
    }
}
