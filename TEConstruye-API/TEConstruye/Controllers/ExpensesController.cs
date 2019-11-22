using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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

        [HttpPost]
        [Route("api/PostExpense")]
        public HttpResponseMessage InsertExpense([FromBody] Expense bill)
        {

            conn.Open();
            string imageName = null;
            imageName = new String(Path.GetFileNameWithoutExtension(bill.billphoto).Take(10).ToArray()).Replace(" ", "_");
            imageName = imageName + Path.GetExtension(bill.billphoto);
            NpgsqlCommand cmd = new NpgsqlCommand(
                "INSERT INTO Bill(provider,idstage,billphoto,billnumber)" +
                 "VALUES(:provider,:idstage,:billphoto,:billnumber);", conn);
            cmd.Parameters.AddWithValue("provider", bill.provider);
            cmd.Parameters.AddWithValue("idstage", bill.idstage);
            cmd.Parameters.AddWithValue("billphoto", imageName);
            cmd.Parameters.AddWithValue("billnumber", bill.billnumber);
            cmd.Prepare();
            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
            NpgsqlDataAdapter adapter = new NpgsqlDataAdapter("" +
                "SELECT id " +
              "FROM public.bill WHERE provider='" + bill.provider +
               "' AND billnumber='" + bill.billnumber + "';", conn);

            DataSet ds = new DataSet();
            adapter.Fill(ds, "bill");
            int idb = Convert.ToInt32(ds.Tables[0].Rows[0]["id"]);

            foreach (Expense_Item temp in bill.items)
            {
                NpgsqlCommand md = new NpgsqlCommand(
                "INSERT INTO bill_item(idbill,idsupply,quantity)" +
                 "VALUES(:idbill,:idsupply,:quantity); ", conn);
                md.Parameters.AddWithValue("idbill", idb);
                md.Parameters.AddWithValue("idsupply", temp.idsupply);
                md.Parameters.AddWithValue("quantity", temp.quantity);
                md.Prepare();
                md.CommandType = CommandType.Text;
                md.ExecuteNonQuery();
            }
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }

        [HttpPost]
        [Route("api/UploadImage")]
        public HttpResponseMessage UploadImage()
        {
            string imageName = null;
            var httpRequest = HttpContext.Current.Request;
            //Upload Image
            var postedFile = httpRequest.Files["Image"];
            //Create custom filename
            imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "_");
            imageName = imageName + Path.GetExtension(postedFile.FileName);
            var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
            postedFile.SaveAs(filePath);


            conn.Open();
            string[] temp = imageName.Split('_');
            return this.Request.CreateResponse(HttpStatusCode.OK, "insertado");
        }

    }
}
