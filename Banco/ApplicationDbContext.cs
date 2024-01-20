using Microsoft.EntityFrameworkCore;
using TradeAngularDotNet.Model;

namespace TradeAngularDotNet.Banco
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuario { get; set; }

        public DbSet<Campeonato> Campeonato { get; set; }
    }
}
