export interface INote {
  id: number;
  title: string;
  description: string;
}

export const noteList: Array<INote> = [
  {
    id: 1,
    title: 'Xem quy hoạch',
    description:
      'Xem quy hoạch bất động sản trên Seland.vn giúp quá trình tìm hiểu và nghiên cứu về quy hoạch đô thị, quy hoạch khu vực, quy hoạch chung của một vùng hay một bất động sản cụ thể, nhằm đánh giá tính khả thi và tiềm năng phát triển của một dự án bất động sản trong tương lai.',
  },
  {
    id: 2,
    title: 'Đăng tin rao vặt',
    description:
      'Đăng tin mua bán cho thuê trên Seland.vn đồng thời hiển thị vị trí mua bán trên bản đồ quy hoạch để khách hàng dễ dàng tìm kiếm bđs. ',
  },
  {
    id: 3,
    title: 'Tìm kiếm, tìm kiếm bđs xung quanh trên bản đồ quy hoạch',
    description:
      'Tìm kiếm những bđs trên bản đồ quy hoạch theo : Loại hình mua bán, cho thuê. Loại hình bđs, khoảng giá, diện tích, tìm theo khu vực, địa phương, địa điểm.',
  },
  {
    id: 4,
    title: 'Vẽ ranh trên bản đồ quy hoạch',
    description:
      'Thể hiện một bđs được giới hạn ranh giới trên bản đổ, giúp người xem biết rõ về toàn bộ diện tích của bđs đã được vẽ và thể hiện trên bản đồ',
  },
  {
    id: 5,
    title: 'Xem giá, trên bản đồ quỹ mua bán, và cho thuê',
    description:
      'Hiển thị giá, tùy chọn theo m2 để khách hàng so sánh các quỹ đất, chọn ra quỹ đất phù hợp nhất, giá thành rẻ nhất của bất kỳ bđs hoặc người dùng  nào được  đăng công khai và được thể hiện trên bản đồ quy hoạch. Áp dụng  phân quyền xem cho từng loại tài khoản.',
  },
  {
    id: 6,
    title: 'Tạo, quản lý, phân quyền cho tài khoản cấp dưới',
    description:
      'Dành cho những sàn môi giới hoạt động trên trang thương mại Seland dễ dàng quản lý quỹ hàng,nhân sự nhân viên, để tối ưu hóa vận hành tài khoản được Seland cấp quyền. Quản lý các hoạt động của các tài khoản cấp dưới như tạo tài khoản, chỉnh sửa, cấp lại mật khẩu và xóa tài khoản cấp dưới',
  },
  {
    id: 7,
    title: 'Nhận thông tin quỹ bđs hot và độc quyền',
    description:
      'Khách hàng đăng ký thói quen đầu tư loại hình bđs và khu vực sẽ được nhân viên nghiên cứu thị trường của Seland tìm kiếm và phân tích rồi cung cấp cho khách những quỹ đất giá tốt nhất',
  },
  {
    id: 8,
    title: 'Dẫn đường tới vị trí bđs quan tâm',
    description:
      'Khách hàng đo được chính xác khoảng cách đường đi đến quỹ đất',
  },
  {
    id: 9,
    title: 'Lọc trên bản đồ quy hoạch',
    description:
      'Lọc chính xác loại hình và khu vực bđs trên bản đồ quy hoạch của Seland để tối ưu hóa việc tìm kiếm bđs',
  },
  {
    id: 10,
    title: 'Xem chính sách phí môi giới',
    description:
      'Dành cho tài khoản CTV và tài khoản nhân viên đại lý có thể xem được chính sách môi giới của đại lý mình',
  },
];
