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
    public class BudgetController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
        [HttpGet]
        [Route("api/GetPayroll")]
        public HttpResponseMessage GetPayroll(int idstage)
        {

            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT vExpensesByStage.payroll " +
                "WHERE idstage=" + idstage, conn);
            DataSet list = new DataSet();
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }

        [HttpGet]
        [Route("api/GetSuppliesBudget")]
        public HttpResponseMessage GetSuppliesBudget(int idstage)
        {

            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT SUM(total) " +
                "FROM vSuppliesByStage " +
                "WHERE idstage=" + idstage, conn);
            DataSet list = new DataSet();
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }

        [HttpGet]
        [Route("api/GetBudget")]
        public HttpResponseMessage GetBudget(int stage)
        {

            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT SUM(vsuppliesbystage.total)" +
                " AS supply, SUM(vpayrollemployees.total) AS payroll," +
                "(SUM(vpayrollemployees.total) + SUM(vsuppliesbystage.total)) AS total " +
                "FROM vsuppliesbystage INNER JOIN vpayrollemployees " +
                "ON vpayrollemployees.idstage = vsuppliesbystage.idstage" +
                " WHERE vsuppliesbystage.idstage = " + stage, conn);
            DataSet list = new DataSet();
            adapter.Fill(list,"budget");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);
            
        }
    }
}
