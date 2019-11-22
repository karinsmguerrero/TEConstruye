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
    public class EmployeeController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);

        //Código tomado de: https://csharp.hotexamples.com/examples/Npgsql/NpgsqlDataAdapter/Fill/php-npgsqldataadapter-fill-method-examples.html
        [HttpGet]
        [Route("api/GetEmployees")]
        public HttpResponseMessage GetEmployees()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("select firstname, lastnamea, lastnameb, telephone, id, salary" +
                " from users join employee on users.username = employee.username", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "users");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }

        [HttpPost]
        [Route("api/PostEmployee")]
        public HttpResponseMessage InsertEmployee([FromBody] Employee newEmployee)
        {
            System.Diagnostics.Debug.WriteLine("Got a post request");
            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand("with first_insert as (" +
                "insert into users(id, firstname, lastnamea, lastnameb, telephone, role, username, password)" +
                 "values(:id, :firstname, :lastnamea, :lastnameb, :telephone, 'Employee', '" + newEmployee.firstname.Substring(0, 2) + "_" +
                 newEmployee.lastnamea.Substring(0, 2) + "_" + newEmployee.lastnameb.Substring(0, 2) + "_emp', 'not')" +
                 "RETURNING username)" +
                "insert into employee(username, salary)" +
                 "values ((select username from first_insert), :salary)", conn);
            cmd.Parameters.AddWithValue("salary", newEmployee.salary);
            cmd.Parameters.AddWithValue("firstname", newEmployee.firstname);
            cmd.Parameters.AddWithValue("lastnamea", newEmployee.lastnamea);
            cmd.Parameters.AddWithValue("lastnameb", newEmployee.lastnameb);
            cmd.Parameters.AddWithValue("telephone", newEmployee.telephone);
            cmd.Parameters.AddWithValue("id", newEmployee.id);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();

            return this.Request.CreateResponse(HttpStatusCode.OK, "insertado");

        }

        [HttpGet]
        [Route("api/GetAllEmployees")]
        public HttpResponseMessage GetAllEmployees()
        {
            conn.Close();
            conn.Open();

            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT id,employee.username,salary," +
                "get_fullname(employee.username) AS fullname FROM employee INNER JOIN users "+
                "ON employee.username = users.username; ", conn);
            DataSet ds = new DataSet();
            adapter.Fill(ds, "users");

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, ds);
        }
    }
}
