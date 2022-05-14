using Business.Abstract;
using Core.Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs.AuthDTOs;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _userService.GetAll();
            if (result.SuccessStatus)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int userId)
        {
            var result = _userService.GetById(userId);
            if (result.SuccessStatus)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }



        [HttpPost("add")]
        public IActionResult Add(User user)
        {
            var result = _userService.Add(user);
            if (result.SuccessStatus)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(User user)
        {
            var result = _userService.Update(user);
            if (result.SuccessStatus)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(User user)
        {
            var result = _userService.Delete(user);
            if (result.SuccessStatus)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
        
        [HttpPost("updateuserinfos")]
        public IActionResult UpdateUserInfos(ChangeUserInfoDto userInfoDto)
        {
            var result = _userService.UpdateUserInfos(userInfoDto);
            if (result.SuccessStatus)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
        
        [HttpPost("changeuserpassword")]
        public IActionResult ChangeUserPassword(ChangeUserPasswordDto changeUserPassword)
        {
            var result = _userService.ChangeUserPassword(changeUserPassword);
            if (result.SuccessStatus)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

    }
}
