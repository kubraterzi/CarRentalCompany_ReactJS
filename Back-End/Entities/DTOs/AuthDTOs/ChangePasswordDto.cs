using Core.Entities;

namespace Entities.DTOs.AuthDTOs
{
    public class ChangeUserPasswordDto : IDto
    {
        public string Email { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
    }
}