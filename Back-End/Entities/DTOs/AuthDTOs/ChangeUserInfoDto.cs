using Core.Entities;

namespace Entities.DTOs.AuthDTOs
{
    public class ChangeUserInfoDto:IDto
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}