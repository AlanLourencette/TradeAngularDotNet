namespace TradeAngularDotNet.Model
{
    public class Jogo
    {
        public int Id { get; set; }
        public TimeCampeonato TimeA { get; set; }
        public TimeCampeonato TimeB { get; set; }
        public int GolA { get; set; }
        public Campeonato Campeonato { get; set; }
    }
}
