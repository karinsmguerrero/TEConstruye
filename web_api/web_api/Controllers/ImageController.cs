using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using web_api.Models;

namespace web_api.Controllers
{
    public class ImageController : ApiController
    {
        [HttpPost]
        [Route("api/UploadImage")]
        public HttpResponseMessage UploadImage()
        {
            string imageName = null;
            var httpRequest = HttpContext.Current.Request;
            //Upload Image
            var postedFile = httpRequest.Files["Image"];
            //Create custom filename
            imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
            postedFile.SaveAs(filePath);


            try
            {

                using (var db = new TecEntities())
                {
                    SqlParameter parameter = new SqlParameter("@ImageName", imageName);

                    var status = db.Database.ExecuteSqlCommand("INSERT INTO Image(ImageName) VALUES(@ImageName)", parameter);

                    return this.Request.CreateResponse(HttpStatusCode.OK, status);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("ERROR :" + ex);
                return this.Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
