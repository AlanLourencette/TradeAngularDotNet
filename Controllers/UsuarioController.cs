using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TradeAngularDotNet.Model;
using TradeAngularDotNet.Repositorios;
using TradeAngularDotNet.Services;

namespace TradeAngularDotNet.Controllers
{
    [ApiController]
    [Route("usuario")]
    public class UsuarioController : ControllerBase
    {
        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> AutenticarAsync([FromBody] Usuario usuario)
        {
            var user = UsuarioRepositorio.Get(usuario.Username, usuario.Password);

            if(user == null)
                return NotFound(new { message = "Usuário ou senha inválidos"});

            var token = TokenService.GerarToken(user);

            return new
            {
                user = user,
                token = token
            };
        }
    }
}
