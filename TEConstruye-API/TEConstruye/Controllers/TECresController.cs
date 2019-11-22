using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using TEConstruye.Models;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Text;

namespace TEConstruye.Controllers
{
    public class TecresController : ApiController
    {
        //Codigo tomado de: https://forums.asp.net/t/2062908.aspx?Call+One+Web+API+to+another+Web+API
        [HttpGet]
        [Route("api/CallTECres")]
        public HttpResponseMessage CallTECres()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:53618");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = client.GetAsync("/api/GetPropiedades").Result;
                if (response.IsSuccessStatusCode)
                {
                    string responseString = response.Content.ReadAsStringAsync().Result;
                    var modelObject = response.Content.ReadAsAsync<PropiedadU[]>().Result;
                    return this.Request.CreateResponse(HttpStatusCode.OK, modelObject);
                }
            }
            return this.Request.CreateResponse(HttpStatusCode.OK, "TERMINATED. NO RESPONSE.");
        }

        static async Task<string> GetURI()
        {
            Uri u = new Uri("http://localhost:53618");
            var response = string.Empty;
            using (var client = new HttpClient())
            {
                HttpResponseMessage result = await client.GetAsync(u);
                if (result.IsSuccessStatusCode)
                {
                    response = await result.Content.ReadAsStringAsync();
                }
            }
            return response;
        }


        static async Task<string> SendURI(HttpContent c)
        {
            Uri u = new Uri("http://localhost:53618/api/PostTec");
            var response = string.Empty;
            using (var client = new HttpClient())
            {
                HttpRequestMessage request = new HttpRequestMessage
                {
                    Method = HttpMethod.Post,
                    RequestUri = u,
                    Content = c
                };

                HttpResponseMessage result = await client.SendAsync(request);
                if (result.IsSuccessStatusCode)
                {
                    response = result.StatusCode.ToString();
                }
            }
            return response;
        }



        static async Task<string> PostURI(Uri u, HttpContent c)
        {
            var response = string.Empty;
            using (var client = new HttpClient())
            {
                HttpResponseMessage result = await client.PostAsync(u, c);
                if (result.IsSuccessStatusCode)
                {
                    response = result.StatusCode.ToString();
                }
            }
            return response;
        }

        //https://www.tutorialsteacher.com/webapi/consuming-web-api-in-dotnet-using-httpclient
        //https://carldesouza.com/httpclient-getasync-postasync-sendasync-c/
        [HttpPost]
        [Route("api/PostTECres")]
        public HttpResponseMessage PostTECres([FromBody] Property propiedad)
        {

            string strProperty = JsonConvert.SerializeObject(propiedad);
            HttpContent c = new StringContent(strProperty, Encoding.UTF8, "application/json");
            var t = Task.Run(() => SendURI(c));
            return this.Request.CreateResponse(HttpStatusCode.OK, "Inserted");

        }


        [HttpGet]
        [Route("api/GetTECres")]
        public HttpResponseMessage GetTECres()
        {
            NpgsqlConnection conn = new NpgsqlConnection(BDconnection.conn);
            using (var client = new HttpClient())
            {

                client.BaseAddress = new Uri("http://localhost:53618");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = client.GetAsync("/api/GetClientTEC").Result;
                Console.WriteLine('k');
                conn.Open();
                if (response.IsSuccessStatusCode)
                {
                    string responseString = response.Content.ReadAsStringAsync().Result;
                    var Client_list = response.Content.ReadAsAsync<ClientAux[]>().Result;
                    /*foreach (Client temp in Client_list)
                    {
                        Console.WriteLine(temp.username);
                    }*/
                    foreach (ClientAux temp in Client_list)
                    {
                        if (temp.status.Equals("Insert"))
                        {
                            NpgsqlCommand cmd = new NpgsqlCommand(
                             "CALL addUserTECres(:username,:password,:telephone,:id,"
                             + ":firstname,:lastnamea,:lastnameb);", conn);

                            cmd.Parameters.AddWithValue("username", temp.username);
                            cmd.Parameters.AddWithValue("password", temp.password);
                            long tel = long.Parse(temp.telephone);
                            cmd.Parameters.AddWithValue("telephone", tel);
                            cmd.Parameters.AddWithValue("id", temp.id);
                            cmd.Parameters.AddWithValue("firstname", temp.firstname);
                            cmd.Parameters.AddWithValue("lastnamea", temp.lastnamea);
                            cmd.Parameters.AddWithValue("lastnameb", temp.lastnameb);
                            cmd.Prepare();
                            cmd.CommandType = CommandType.Text;
                            cmd.ExecuteNonQuery();

                        }
                        if (temp.status.Equals("Delete"))
                        {
                            NpgsqlCommand cmd = new NpgsqlCommand(
                             "DELETE * FROM users WHERE username=:username;", conn);
                            cmd.Parameters.AddWithValue("username", temp.username);
                            cmd.Prepare();
                            cmd.CommandType = CommandType.Text;
                            cmd.ExecuteNonQuery();


                        }
                        if (temp.status.Equals("Update"))
                        {
                            NpgsqlCommand cmd = new NpgsqlCommand(
                             "UPDATE users SET password=:password,telephone=:telephone," +
                             "id=:id,firstname=:firstname,lastnamea:lastnamea,lastnameb=:lastnameb"
                             + " WHERE username=:username;", conn);

                            cmd.Parameters.AddWithValue("username", temp.username);
                            cmd.Parameters.AddWithValue("password", temp.password);
                            long tel = long.Parse(temp.telephone);
                            cmd.Parameters.AddWithValue("telephone", tel);
                            cmd.Parameters.AddWithValue("id", temp.id);
                            cmd.Parameters.AddWithValue("firstname", temp.firstname);
                            cmd.Parameters.AddWithValue("lastnamea", temp.lastnamea);
                            cmd.Parameters.AddWithValue("lastnameb", temp.lastnameb);
                            cmd.Prepare();
                            cmd.CommandType = CommandType.Text;
                            cmd.ExecuteNonQuery();


                        }

                    }
                    conn.Close();
                    return this.Request.CreateResponse(HttpStatusCode.OK, "inserted");
                }
            }
            conn.Close();
            return this.Request.CreateResponse(HttpStatusCode.OK, "TERMINATED. NO RESPONSE.");
        }

    }
}
