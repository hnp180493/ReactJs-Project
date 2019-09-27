
using AutoMapper;
using Comment.React.Models;
using Comment.React.ViewModels;

namespace Comment.React.Helper
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<CommentViewModel, CommentModel>();
            CreateMap<CommentViewModel, UserModel>();
            CreateMap<CommentModel, CommentViewModel>()
                .ForMember(x => x.FullName, y => y.MapFrom(z => z.User.FullName))
                .ForMember(x => x.Image, y => y.MapFrom(z => z.User.Image));
        }
    }
}
