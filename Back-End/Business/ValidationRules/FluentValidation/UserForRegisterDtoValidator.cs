using System.Text.RegularExpressions;
using Entities.DTOs.AuthDTOs;
using FluentValidation;

namespace Business.ValidationRules.FluentValidation
{
    public class UserForRegisterDtoValidator : AbstractValidator<UserForRegisterDto>
    {
        public UserForRegisterDtoValidator()
        {
            RuleFor(u => u.FirstName).MinimumLength(2).NotEmpty();
            RuleFor(u => u.LastName).MinimumLength(2).NotEmpty();
            RuleFor(u => u.Email).EmailAddress().NotEmpty();
            RuleFor(u => u.Password).NotEmpty();
            RuleFor(u => u.Password).Must(IsPasswordValid).WithMessage("Your password must contain at least eight characters, at least one letter and one number!");
        }
        
        
        private bool IsPasswordValid(string arg)
        {
            Regex regex = new Regex(@"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
            return regex.IsMatch(arg);
        }
        
    }
}