using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Test
{
    public class TestModel
    {
        public int Model { get; set; }

        public string Owner { get; set; }

        public MyAdditionalModel ThisOne { get; set; }

    }
}
