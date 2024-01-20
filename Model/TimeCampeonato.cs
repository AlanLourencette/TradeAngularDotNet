namespace TradeAngularDotNet.Model
{
    public class TimeCampeonato
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Pontos { get; set; }
        public int Gol { get; set; }
        public Campeonato Campeonato { get; set; }
    }
}
