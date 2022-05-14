using Business.Abstract;
using Core.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Caching;
using Core.Aspects.Autofac.Validation;
using Core.Entities.Concrete;
using Core.Utilities.Security.Hashing;
using Core.Utilities.Security.JWT;
using Entities.DTOs.AuthDTOs;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }

        
        
        
        //[CacheAspect]
        public IDataResult<List<User>> GetAll()

        {
            return new SuccessDataResult<List<User>>(_userDal.GetAll(), Messages.Listed);
        }

        
        
        
        //[CacheAspect]
        public IDataResult<User> GetById(int userId)

        {
            return new SuccessDataResult<User>(_userDal.Get(u=> u.Id == userId), Messages.Listed);
        }       

        [ValidationAspect(typeof(UserValidator), Priority =1)]

        
        
        
        [CacheRemoveAspect("IUserService.Get")]
        public IResult Delete(User user)
        {
            var result = _userDal.DeleteUserIfNotReturnDateNull(user);
            if (result)
            {
                return new SuccessResult(Messages.Deleted);
            }

            return new ErrorResult(Messages.NotDeleted);

        }
        
        
        

        [ValidationAspect(typeof(UserValidator), Priority =1)]
        //[CacheRemoveAspect("IUserService.Get")]
        public IResult Update(User user)
        {
            _userDal.Update(user);
            return new SuccessResult(Messages.Updated);
        }

        
        
        
        //[CacheAspect]
        public IDataResult<List<OperationClaim>> GetClaims(User user)
        {
            return new SuccessDataResult<List<OperationClaim>>(_userDal.GetClaims(user));
        }

        
        
        
        [CacheRemoveAspect("IUserService.Get")]
        public IResult Add(User user)
        {
            _userDal.Add(user);
            return new SuccessResult();
        }

        
        
        //[CacheAspect]
        public IDataResult<User> GetByEmail(string email)
        {
            return new SuccessDataResult<User>(_userDal.Get(u=> u.Email == email));
        }
        
        public IResult UpdateUserInfos(ChangeUserInfoDto changeUserInfo)
        {
            var userToUpdate = GetByEmail(changeUserInfo.Email).Data;
            userToUpdate.FirstName = changeUserInfo.FirstName;
            userToUpdate.LastName = changeUserInfo.LastName;
            Update(userToUpdate);
            return new SuccessResult();
        }


        [ValidationAspect(typeof(UserForRegisterDtoValidator))]
        public IResult ChangeUserPassword(ChangeUserPasswordDto changePasswordDto)
        {
            byte[] passwordHash, passwordSalt;
            var userToCheck = GetByEmail(changePasswordDto.Email);
            if(userToCheck.Data == null)
            {
                return new ErrorResult(AspectMessages.UserNotFound);
            }
            if (!HashingHelper.VerifyPasswordHash(changePasswordDto.OldPassword, userToCheck.Data.PasswordHash, userToCheck.Data.PasswordSalt))
            {
                return new ErrorResult(AspectMessages.PasswordError);
            }
            HashingHelper.CreatePasswordHash(changePasswordDto.NewPassword, out passwordHash, out passwordSalt);
            userToCheck.Data.PasswordHash = passwordHash;
            userToCheck.Data.PasswordSalt = passwordSalt;
            Update(userToCheck.Data);
            return new SuccessResult(AspectMessages.PasswordChanged);
        }
    }
}
