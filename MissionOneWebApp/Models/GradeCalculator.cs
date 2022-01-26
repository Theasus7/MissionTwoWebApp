using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MissionOneWebApp.Models
{
    public class GradeCalculator
    {
        [Required]
        [Range(0, 100)]
        public int Ass { get; set; }

        [Required]
        [Range(0, 100)]
        public int Pro { get; set; }

        [Required]
        [Range(0, 100)]
        public int Qui { get; set; }

        [Required]
        public int Exa { get; set; }

        [Required]
        [Range(0, 100)]
        public int INT { get; set; }

    }
}
