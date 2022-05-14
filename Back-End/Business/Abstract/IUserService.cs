using Core.Entities.Concrete;
using Core.Utilities.Results;
using System;
using System.Collections.Generic;
using System.Text;
using Entities.DTOs.AuthDTOs;

namespace Business.Abstract
{
    public interface IUserService
    {
        IDataResult<List<User>> GetAll();
        IDataResult<User> GetById(int userId);
        IResult Delete(User user);
        IResult Update(User user);


        IDataResult<List<OperationClaim>> GetClaims(User user);
        IResult Add(User user);
        IDataResult<User> GetByEmail(string email);
        IResult UpdateUserInfos(ChangeUserInfoDto changeUserInfo);
        IResult ChangeUserPassword(ChangeUserPasswordDto changePasswordDto);

    }
}
