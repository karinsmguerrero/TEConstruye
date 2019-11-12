using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class Bill_Item
    {
        public int idbill { get; set; }
        public int idsupply { get; set; }
        public int quantity { get; set; }
    }
}