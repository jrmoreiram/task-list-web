using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskListWebAPI.Models
{
    public class Tasks
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public string CreationDate { get; set; }
        public string ExclusionDate { get; set; }
        public string AlterDate { get; set; }
    }
}
