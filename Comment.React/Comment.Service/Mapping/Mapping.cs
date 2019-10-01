
using AutoMapper;
using Comment.Model.Response;
using Comment.React.Models;

namespace Comment.React.Helper
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            Request();
            Response();
        }


        public void Request()
        {
            CreateMap<AddOrEditCommentRequest, CommentModel>();
        }

        public void Response()
        {
            CreateMap<CommentModel, CommentResponse>()
               .ForMember(x => x.FullName, y => y.MapFrom(z => z.User.FullName))
               .ForMember(x => x.Image, y => y.MapFrom(z => z.User.Image));
        }
    }
}
