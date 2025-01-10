import React, { useState } from 'react';
import './AdminSurveyList.css';

const exampleSurveys = [
  {
    id: 1,
    name: 'Nguyễn Thị Mai',
    email: 'mai.nguyen@gmail.com',
    role: 'Mentee',
    registrationSatisfaction: 'Hài lòng',
    requestProcessingTime: 'Nhanh chóng',
    connectionInfoSufficiency: 'Đủ',
    mentorMatch: 'Phù hợp',
    guidanceSupport: 'Nhiều',
    sessionQuality: 'Đáp ứng',
    schedulingDifficulty: 'Một ít khó khăn',
    bdhSupport: 'Hài lòng',
    programUsefulness: 'Nhiều',
    improvementSuggestions: 'Không',
    futureParticipation: 'Có',
  },
  {
    id: 2,
    name: 'Trần Minh Tú',
    email: 'tu.tran@gmail.com',
    role: 'Mentor',
    registrationSatisfaction: 'Rất hài lòng',
    requestProcessingTime: 'Rất nhanh chóng',
    connectionInfoSufficiency: 'Rất đầy đủ',
    mentorMatch: 'Rất phù hợp',
    guidanceSupport: 'Rất nhiều',
    sessionQuality: 'Rất đáp ứng',
    schedulingDifficulty: 'Không gặp khó khăn',
    bdhSupport: 'Rất hài lòng',
    programUsefulness: 'Rất nhiều',
    improvementSuggestions: 'Thêm buổi thảo luận nhóm',
    futureParticipation: 'Có',
  },
  {
    id: 3,
    name: 'Lê Thị Thanh',
    email: 'thanh.le@gmail.com',
    role: 'Mentee',
    registrationSatisfaction: 'Hài lòng',
    requestProcessingTime: 'Nhanh chóng',
    connectionInfoSufficiency: 'Đủ',
    mentorMatch: 'Phù hợp',
    guidanceSupport: 'Nhiều',
    sessionQuality: 'Đáp ứng',
    schedulingDifficulty: 'Một ít khó khăn',
    bdhSupport: 'Hài lòng',
    programUsefulness: 'Nhiều',
    improvementSuggestions: 'Không',
    futureParticipation: 'Có',
  },
  {
    id: 4,
    name: 'Phan Thị Lan',
    email: 'lan.phan@gmail.com',
    role: 'Mentor',
    registrationSatisfaction: 'Rất hài lòng',
    requestProcessingTime: 'Rất nhanh chóng',
    connectionInfoSufficiency: 'Rất đầy đủ',
    mentorMatch: 'Rất phù hợp',
    guidanceSupport: 'Rất nhiều',
    sessionQuality: 'Rất đáp ứng',
    schedulingDifficulty: 'Không gặp khó khăn',
    bdhSupport: 'Rất hài lòng',
    programUsefulness: 'Rất nhiều',
    improvementSuggestions: 'Cần thêm tài liệu chi tiết',
    futureParticipation: 'Có',
  },
  {
    id: 5,
    name: 'Hoàng Thị Mai',
    email: 'mai.hoang@gmail.com',
    role: 'Mentee',
    registrationSatisfaction: 'Hài lòng',
    requestProcessingTime: 'Nhanh chóng',
    connectionInfoSufficiency: 'Đủ',
    mentorMatch: 'Phù hợp',
    guidanceSupport: 'Nhiều',
    sessionQuality: 'Đáp ứng',
    schedulingDifficulty: 'Một ít khó khăn',
    bdhSupport: 'Hài lòng',
    programUsefulness: 'Nhiều',
    improvementSuggestions: 'Không',
    futureParticipation: 'Có',
  },
  {
    id: 6,
    name: 'Nguyễn Thị Kim',
    email: 'kim.nguyen@gmail.com',
    role: 'Mentor',
    registrationSatisfaction: 'Rất hài lòng',
    requestProcessingTime: 'Rất nhanh chóng',
    connectionInfoSufficiency: 'Rất đầy đủ',
    mentorMatch: 'Rất phù hợp',
    guidanceSupport: 'Rất nhiều',
    sessionQuality: 'Rất đáp ứng',
    schedulingDifficulty: 'Không gặp khó khăn',
    bdhSupport: 'Rất hài lòng',
    programUsefulness: 'Rất nhiều',
    improvementSuggestions: 'Thêm bài giảng trực tuyến',
    futureParticipation: 'Có',
  },
  {
    id: 7,
    name: 'Nguyễn Bảo Tuấn',
    email: 'tuan.nguyen@gmail.com',
    role: 'Mentee',
    registrationSatisfaction: 'Hài lòng',
    requestProcessingTime: 'Nhanh chóng',
    connectionInfoSufficiency: 'Đủ',
    mentorMatch: 'Phù hợp',
    guidanceSupport: 'Nhiều',
    sessionQuality: 'Đáp ứng',
    schedulingDifficulty: 'Một ít khó khăn',
    bdhSupport: 'Hài lòng',
    programUsefulness: 'Nhiều',
    improvementSuggestions: 'Không',
    futureParticipation: 'Có',
  },
  {
    id: 8,
    name: 'Phạm Thanh Lan',
    email: 'lan.pham@gmail.com',
    role: 'Mentor',
    registrationSatisfaction: 'Rất hài lòng',
    requestProcessingTime: 'Rất nhanh chóng',
    connectionInfoSufficiency: 'Rất đầy đủ',
    mentorMatch: 'Rất phù hợp',
    guidanceSupport: 'Rất nhiều',
    sessionQuality: 'Rất đáp ứng',
    schedulingDifficulty: 'Không gặp khó khăn',
    bdhSupport: 'Rất hài lòng',
    programUsefulness: 'Rất nhiều',
    improvementSuggestions: 'Cần thêm các buổi hỏi đáp',
    futureParticipation: 'Có',
  },
  {
    id: 9,
    name: 'Lê Thị Kim',
    email: 'kim.le@gmail.com',
    role: 'Mentee',
    registrationSatisfaction: 'Hài lòng',
    requestProcessingTime: 'Nhanh chóng',
    connectionInfoSufficiency: 'Đủ',
    mentorMatch: 'Phù hợp',
    guidanceSupport: 'Nhiều',
    sessionQuality: 'Đáp ứng',
    schedulingDifficulty: 'Một ít khó khăn',
    bdhSupport: 'Hài lòng',
    programUsefulness: 'Nhiều',
    improvementSuggestions: 'Không',
    futureParticipation: 'Có',
  },
  {
    id: 10,
    name: 'Nguyễn Thị Lan',
    email: 'lan.nguyen@gmail.com',
    role: 'Mentor',
    registrationSatisfaction: 'Rất hài lòng',
    requestProcessingTime: 'Rất nhanh chóng',
    connectionInfoSufficiency: 'Rất đầy đủ',
    mentorMatch: 'Rất phù hợp',
    guidanceSupport: 'Rất nhiều',
    sessionQuality: 'Rất đáp ứng',
    schedulingDifficulty: 'Không gặp khó khăn',
    bdhSupport: 'Rất hài lòng',
    programUsefulness: 'Rất nhiều',
    improvementSuggestions: 'Thêm các tài liệu học tập',
    futureParticipation: 'Có',
  },
  {
    id: 11,
    name: 'Nguyễn Thị Bảo',
    email: 'bao.nguyen@gmail.com',
    role: 'Mentee',
    registrationSatisfaction: 'Hài lòng',
    requestProcessingTime: 'Nhanh chóng',
    connectionInfoSufficiency: 'Đủ',
    mentorMatch: 'Phù hợp',
    guidanceSupport: 'Nhiều',
    sessionQuality: 'Đáp ứng',
    schedulingDifficulty: 'Một ít khó khăn',
    bdhSupport: 'Hài lòng',
    programUsefulness: 'Nhiều',
    improvementSuggestions: 'Không',
    futureParticipation: 'Có',
  },
  {
    id: 12,
    name: 'Trung Thị Thảo',
    email: 'thao.trung@gmail.com',
    role: 'Mentor',
    registrationSatisfaction: 'Rất hài lòng',
    requestProcessingTime: 'Rất nhanh chóng',
    connectionInfoSufficiency: 'Rất đầy đủ',
    mentorMatch: 'Rất phù hợp',
    guidanceSupport: 'Rất nhiều',
    sessionQuality: 'Rất đáp ứng',
    schedulingDifficulty: 'Không gặp khó khăn',
    bdhSupport: 'Rất hài lòng',
    programUsefulness: 'Rất nhiều',
    improvementSuggestions: 'Thêm các buổi thảo luận nhóm',
    futureParticipation: 'Có',
  },
  {
    id: 13,
    name: 'Hoàng Thị Hoài',
    email: 'hoai.hoang@gmail.com',
    role: 'Mentee',
    registrationSatisfaction: 'Hài lòng',
    requestProcessingTime: 'Nhanh chóng',
    connectionInfoSufficiency: 'Đủ',
    mentorMatch: 'Phù hợp',
    guidanceSupport: 'Nhiều',
    sessionQuality: 'Đáp ứng',
    schedulingDifficulty: 'Một ít khó khăn',
    bdhSupport: 'Hài lòng',
    programUsefulness: 'Nhiều',
    improvementSuggestions: 'Không',
    futureParticipation: 'Có',
  },
  {
    id: 14,
    name: 'Phạm Thị Lan',
    email: 'lan.pham@gmail.com',
    role: 'Mentor',
    registrationSatisfaction: 'Rất hài lòng',
    requestProcessingTime: 'Rất nhanh chóng',
    connectionInfoSufficiency: 'Rất đầy đủ',
    mentorMatch: 'Rất phù hợp',
    guidanceSupport: 'Rất nhiều',
    sessionQuality: 'Rất đáp ứng',
    schedulingDifficulty: 'Không gặp khó khăn',
    bdhSupport: 'Rất hài lòng',
    programUsefulness: 'Rất nhiều',
    improvementSuggestions: 'Thêm buổi trò chuyện',
    futureParticipation: 'Có',
  },
  {
    id: 15,
    name: 'Lê Thị Lan',
    email: 'lan.le@gmail.com',
    role: 'Mentee',
    registrationSatisfaction: 'Hài lòng',
    requestProcessingTime: 'Nhanh chóng',
    connectionInfoSufficiency: 'Đủ',
    mentorMatch: 'Phù hợp',
    guidanceSupport: 'Nhiều',
    sessionQuality: 'Đáp ứng',
    schedulingDifficulty: 'Một ít khó khăn',
    bdhSupport: 'Hài lòng',
    programUsefulness: 'Nhiều',
    improvementSuggestions: 'Không',
    futureParticipation: 'Có',
  },
  {
    id: 16,
    name: 'Phạm Thị Thu',
    email: 'thu.pham@gmail.com',
    role: 'Mentor',
    registrationSatisfaction: 'Rất hài lòng',
    requestProcessingTime: 'Rất nhanh chóng',
    connectionInfoSufficiency: 'Rất đầy đủ',
    mentorMatch: 'Rất phù hợp',
    guidanceSupport: 'Rất nhiều',
    sessionQuality: 'Rất đáp ứng',
    schedulingDifficulty: 'Không gặp khó khăn',
    bdhSupport: 'Rất hài lòng',
    programUsefulness: 'Rất nhiều',
    improvementSuggestions: 'Thêm video hướng dẫn',
    futureParticipation: 'Có',
  }
];


const AdminSurveyList = () => {
  const [surveys] = useState(exampleSurveys);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const filteredSurveys = surveys.filter((survey) => {
    const matchesSearch = survey.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || survey.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleRoleFilter = (e) => setRoleFilter(e.target.value);

  return (
    <div className="admin-survey-list">
      <h1 className="admin-survey-list__title">KHẢO SÁT ĐÁNH GIÁ NGƯỜI DÙNG</h1>

      <div className="search-filter">
        <input
          type="text"
          className="search-filter__input"
          placeholder="Tìm kiếm theo tên..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="search-filter__select"
          value={roleFilter}
          onChange={handleRoleFilter}
        >
          <option value="all">Tất cả vai trò</option>
          <option value="Mentee">Mentee</option>
          <option value="Mentor">Mentor</option>
        </select>
      </div>

      <div className="survey-table__scrollable">
        <table className="survey-table">
          <thead className="survey-table__thead">
            <tr>
              <th className="survey-table__th">Họ và tên</th>
              <th className="survey-table__th">Email</th>
              <th className="survey-table__th">Vai trò</th>
              <th className="survey-table__th">Đánh giá quy trình đăng ký</th>
              <th className="survey-table__th">Thời gian xử lý yêu cầu kết nối</th>
              <th className="survey-table__th">Đầy đủ thông tin kết nối</th>
              <th className="survey-table__th">Phù hợp Mentor/Mentee</th>
              <th className="survey-table__th">Hỗ trợ và hướng dẫn</th>
              <th className="survey-table__th">Chất lượng buổi cố vấn</th>
              <th className="survey-table__th">Khó khăn trong lịch cố vấn</th>
              <th className="survey-table__th">Hài lòng hỗ trợ BDH</th>
              <th className="survey-table__th">Hữu ích của chương trình</th>
              <th className="survey-table__th">Đề xuất cải thiện</th>
              <th className="survey-table__th">Tham gia tương lai</th>
            </tr>
          </thead>
          <tbody className="survey-table__tbody">
            {filteredSurveys.map((survey) => (
              <tr key={survey.id}>
                <td className="survey-table__td">{survey.name}</td>
                <td className="survey-table__td">{survey.email}</td>
                <td className="survey-table__td">{survey.role}</td>
                <td className="survey-table__td">{survey.registrationSatisfaction}</td>
                <td className="survey-table__td">{survey.requestProcessingTime}</td>
                <td className="survey-table__td">{survey.connectionInfoSufficiency}</td>
                <td className="survey-table__td">{survey.mentorMatch}</td>
                <td className="survey-table__td">{survey.guidanceSupport}</td>
                <td className="survey-table__td">{survey.sessionQuality}</td>
                <td className="survey-table__td">{survey.schedulingDifficulty}</td>
                <td className="survey-table__td">{survey.bdhSupport}</td>
                <td className="survey-table__td">{survey.programUsefulness}</td>
                <td className="survey-table__td">{survey.improvementSuggestions}</td>
                <td className="survey-table__td">{survey.futureParticipation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSurveyList;
