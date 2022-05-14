using System.Collections.Generic;
using Core.Utilities.Results;
using Entities.Concrete;

namespace Business.Abstract
{
    public interface ICardService
    {
        IDataResult<List<Card>> GetAll();
        IDataResult<Card> GetById(int cardId);
        IDataResult<List<Card>> GetCardsByCustomerId(int customerId);
        IResult Add(Card card);
        IResult Delete(Card card);
        IResult Update(Card card);
    }
}