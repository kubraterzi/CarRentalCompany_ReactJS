using Business.Abstract;
using Core.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Caching;
using Core.Aspects.Autofac.Validation;
using Core.Utilities.Business;

namespace Business.Concrete
{
    public class RentalManager : IRentalService
    {
        IRentalDal _rentalDal;
        private ICustomerService _customerService;
        private ICarService _carService;

        public RentalManager(IRentalDal rentalDal, ICustomerService customerService, ICarService carService)
        {
            _rentalDal = rentalDal;
            _customerService = customerService;
            _carService = carService;
        }


        [CacheAspect]
        public IDataResult<List<Rental>> GetAll()
        {
            return new SuccessDataResult<List<Rental>>(_rentalDal.GetAll(), Messages.Listed);
        }



        [CacheAspect]
        public IDataResult<List<Rental>> GetRentalByUndelivered()
        {
            return new SuccessDataResult<List<Rental>>(_rentalDal.GetAll(r => r.ReturnDate == null), Messages.Listed);
        }



        [CacheAspect]
        public IDataResult<List<RentalDetailDto>> GetRentalDetails()
        {
            return new SuccessDataResult<List<RentalDetailDto>>(_rentalDal.GetRentalDetails(), Messages.Listed);
        }



        [CacheAspect]
        public IDataResult<Rental> GetById(int carId)
        {
            return new SuccessDataResult<Rental>(_rentalDal.Get(r => r.CarID == carId), Messages.Listed);
        }




        [CacheRemoveAspect("IRentalService.Get")]
        [ValidationAspect(typeof(RentalValidator), Priority = 1)]
        public IResult Add(Rental rental)
        {
            var result = BusinessRules.Run(IsCarAvailable(rental.CarID), CheckIfFindeks(rental.CarID, rental.CustomerID));

            if (result != null)
            {
                return new ErrorResult();
            }

            _rentalDal.Add(rental);
            return new SuccessResult(Messages.Added);
        }



        [CacheRemoveAspect("IRentalService.Get")]
        public IResult Delete(Rental rental)
        {
            var result = _rentalDal.DeleteRentalIfNotReturnDateNull(rental);
            if (result)
            {
                return new SuccessResult(Messages.Deleted);
            }

            return new ErrorResult(Messages.NotDeleted);
        }




        [ValidationAspect(typeof(RentalValidator), Priority = 1)]
        [CacheRemoveAspect("IRentalService.Get")]
        public IResult Update(Rental rental)
        {
            _rentalDal.Update(rental);
            return new SuccessResult(Messages.Updated);
        }

        
        public IResult CheckIfFindeks(int carId, int customerId)
        {
            var customer = _customerService.GetById(customerId).Data;
            var car = _carService.GetById(carId).Data;
            if (customer.FindeksPoint <= car.MinFindeksPoint)
            {
                return new ErrorResult(Messages.FindeksPointNotEnough);
            }
            return new SuccessResult();
        }


        private IResult IsCarAvailable(int carId)
        {
            var result = _rentalDal.GetAll(c => c.CarID == carId && (c.ReturnDate == null || c.ReturnDate > DateTime.Now)).Any();
            if (result)
            {
                return new ErrorResult(Messages.NotAvailable);
            }

            return new SuccessResult();
        }
        
    }
}
