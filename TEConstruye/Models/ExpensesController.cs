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
    public class ExpensesController : ApiController
    {
        NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
        [HttpPost]
        [Route("api/PostBill")]
        public HttpResponseMessage InsertBill([FromBody] Bill bill)
        {

            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand(
                "INSERT INTO Bill(provider,idstage,billphoto,billnumber)" +
                 "VALUES(:provider,:idstage,:billphoto,:billnumber)", conn);
            cmd.Parameters.AddWithValue("username", bill.provider);
            cmd.Parameters.AddWithValue("idstage", bill.idstage);
            cmd.Parameters.AddWithValue("billphoto", bill.billphoto);
            cmd.Parameters.AddWithValue("billnumber", bill.billnumber);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }

        [HttpPost]
        [Route("api/PostBillItem")]
        public HttpResponseMessage InsertBillItem([FromBody] Bill_Item bill)
        {

            conn.Open();
            NpgsqlCommand cmd = new NpgsqlCommand(
                "INSERT INTO Bill(idbill,idsupply,quantity)" +
                 "VALUES(:idbill,:idsupply,:quantity)", conn);
            cmd.Parameters.AddWithValue("idbill", bill.idbill);
            cmd.Parameters.AddWithValue("idsupply", bill.idsupply);
            cmd.Parameters.AddWithValue("quantity", bill.quantity);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }
    }
}
