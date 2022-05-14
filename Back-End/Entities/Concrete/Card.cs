using Core.Entities;

namespace Entities.Concrete
{
    public class Card : IEntity
    {
        public int CardId { get; set; }
        public int CustomerId { get; set; }
        public string CardNumber { get; set; }
        public int DateMonth { get; set; }
        public int DateYear { get; set; }
        public string NameOnTheCard { get; set; }
        public string CvvCode { get; set; }
    }
}