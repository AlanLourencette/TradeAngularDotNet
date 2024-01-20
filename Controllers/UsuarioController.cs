using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TradeAngularDotNet.Banco;
using TradeAngularDotNet.Model;
using TradeAngularDotNet.Repositorios;
using TradeAngularDotNet.Services;

namespace TradeAngularDotNet.Controllers
{
    
    [ApiController]
    [Route("api/usuario")]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext Contexto;

        public UsuarioController(ApplicationDbContext context)
        {
            Contexto = context;
        }

        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> Login([FromBody] Usuario usuario)
        {
            var usuarioEncontrado = Contexto.Usuario
                .FirstOrDefault(u => u.Username == usuario.Username && u.Password == usuario.Password);

            if (usuarioEncontrado == null)
            {
                return NotFound("Usuário não encontrado");
            }

            var token = TokenService.GerarToken(usuarioEncontrado);

            return new
            {
                user = usuarioEncontrado,
                token = token
            };
        }
    }
}
