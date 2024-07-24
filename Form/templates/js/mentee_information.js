function doPost(e) {
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var rowData = [];
      
      // Lấy thông tin từ biểu mẫu
      var name = e.parameter.name;
      var email = e.parameter.email;
      var age = e.parameter.number;
      // ... lấy thêm thông tin từ các trường khác
      
      // Thêm thông tin vào hàng mới trong bảng tính
      rowData.push(name, email, age);
      // ... thêm các giá trị khác vào rowData
      
      sheet.appendRow(rowData);
      
      return ContentService.createTextOutput("Đăng ký thành công!").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
      return ContentService.createTextOutput("Đã xảy ra lỗi: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
  }
  