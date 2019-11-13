using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using web_api.Handlers;

namespace web_api
{
    public static class WebApiConfig
    {
        //Codigo tomado de: https://stackoverflow.com/questions/35157306/enabling-multiple-cors-for-web-api
        private static string GetAllowedOrigins()
        {
            //Make a call to the database to get allowed origins and convert to a comma separated string
            return "http://localhost:4200,http://localhost:4900,http://localhost:44300";
        }

        public static void Register(HttpConfiguration config)
        {
            //Enable CORS
            string origins = GetAllowedOrigins();
            var cors = new EnableCorsAttribute(origins, "*", "*");
            config.EnableCors(cors);

            // Configuración y servicios de API web

            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional },
                constraints: new { id = new App_Start.CustomRegExConstraint(@"[A-Za-z]*") }
                //constraints: new { id = @"[A-Za-z]*" }
            );

            config.Routes.MapHttpRoute(
                 name: "AdminApi",
                 routeTemplate: "api/Administracion/{controller}/{id}",
                 defaults: new { id = RouteParameter.Optional },
                 constraints: new { id = new App_Start.CustomRegExConstraint(@"[A-Za-z]*") }
             //constraints: new { id = @"[A-Za-z]*" }
             );
        }
    }
}
