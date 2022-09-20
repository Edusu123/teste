using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalculadoraController : Controller
    {
        [HttpPost]
        [Route("soma")]
        public decimal Soma(Numeros nums)
        {
            return Convert.ToDecimal(nums.Num1) + Convert.ToDecimal(nums.Num2);
        }

        [HttpPost]
        [Route("subtracao")]
        public decimal Subtracao(Numeros nums)
        {
            return Convert.ToDecimal(nums.Num1) - Convert.ToDecimal(nums.Num2);
        }

        [HttpPost]
        [Route("multiplicacao")]
        public decimal Multiplicacao(Numeros nums)
        {
            return Convert.ToDecimal(nums.Num1) * Convert.ToDecimal(nums.Num2);
        }

        [HttpPost]
        [Route("divisao")]
        public decimal Divisao(Numeros nums)
        {
            if(Convert.ToDecimal(nums.Num2) == 0)
            {
                return 0;
            }

            return Convert.ToDecimal(nums.Num1) / Convert.ToDecimal(nums.Num2);
        }
    }
}
