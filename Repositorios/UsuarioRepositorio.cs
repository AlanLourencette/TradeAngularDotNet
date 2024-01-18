using TradeAngularDotNet.Model;

namespace TradeAngularDotNet.Repositorios
{
    public class UsuarioRepositorio
    {
        public static Usuario Get(string username, string password)
        {
            var usuarios = new List<Usuario> 
            { 
                new Usuario { Id = 1, Username = "admin", Password = "admin" },
                new Usuario { Id = 2, Username = "teste", Password = "teste" }
            };

            return usuarios.FirstOrDefault(x => x.Username == username && x.Password == password);
        }
    }
}
