using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TEConstruye.Models
{
    public class Expense
    {
        public string provider { get; set; }
        public int billnumber { get; set; }
        public string billphoto { get; set; }
        public int idstage { get; set; }
        public Expense_Item[] items { get; set; }
    }
    public class Expense_Item
    {
        public int idsupply { get; set; }
        public int quantity { get; set; }
    }
}