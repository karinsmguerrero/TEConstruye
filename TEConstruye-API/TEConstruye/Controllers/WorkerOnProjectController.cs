﻿using Npgsql;
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
    public class WorkerOnProjectController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
        [HttpGet]
        [Route("api/GetPayrollStage")]
        public HttpResponseMessage GetPayrollStage(int stage)
        {

            conn.Open();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("SELECT employee_username AS username," +
                "employee AS fullname,hours,salary,total FROM vpayrollemployees " +
                "WHERE idstage = " + stage, conn);
            DataSet list = new DataSet();
            adapter.Fill(list);

            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, list.Tables[0]);

        }

        [HttpPost]
        [Route("api/PostWorkerProject")]
        public HttpResponseMessage InsertSupply([FromBody] WorkerOnProject worker)
        {

            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand(
                "INSERT INTO worker_on_project(username,idstage,hours)" +
                 "VALUES(:username, :idstage,:hours)", conn);
            cmd.Parameters.AddWithValue("username", worker.username);
            cmd.Parameters.AddWithValue("idstage", worker.idstage);
            cmd.Parameters.AddWithValue("hours", worker.hours);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }


    }
}
