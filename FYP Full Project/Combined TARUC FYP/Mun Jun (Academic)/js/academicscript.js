var table = document.getElementById('mytable');
var input = document.getElementById('myinput');
var caretUpClassName = 'fa fa-caret-up';
var caretDownClassName = 'fa fa-caret-down';
var tableData = [
    {university: 'University Teknologi Malaysia', department: 'Fakulti Alam Bina & Ukur', position: 'Pensyarah Kanan', name: 'Dr. Abdul Rahim Bin Abdul Hamid', email: 'abdul.rahim@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS52)', name: 'Sr Dr. Abd Wahid Bin Rasib', email: 'abdwahid@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS52)', name: 'Gs. Dr. Abd. Halim Bin Hamzah', email: 'halimhamzah@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS51)', name: 'Dr. Abdul Rahim Bin Abdul Hamid', email: 'abdul.rahim@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PROFESOR MADYA (DS54)', name: 'Prof. Madya Sr. Abdul Wahid Bin Kamarulzaman', email: 'ab_wahid@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS52)', name: 'Sr Dr. Abdullah Hisam Bin Omar', email: 'abdullahhisham@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PROFESOR (VK07)', name: 'Prof. Dato Tpr. Gs. Dr. Ahmad Nazri Bin Muhamad Ludin', email: 'b-anazri@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS51)', name: 'Dr. Aiman Bin Mohd Rashid', email: 'https://people.utm.my/aimrashid/'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS51)', name: 'Dr. Ainur Zaireen Binti Zainudin', email: 'ainurzaireen@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS52)', name: 'Sr. Dr. Alvin Lau Meng Shin', email: 'alvinlau@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS51)', name: 'Sr. Dr. Ami Hassan Bin Md Din', email: 'amihassan@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS51)', name: 'Dr. Aminah Binti Mohsin', email: 'aminahmohsin@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PROFESOR (VK07)', name: 'Prof. Dr. Anuar Bin Ahmad', email: 'anuarahmad@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS51)', name: 'Dr Azalillah Ramdani Binti Musa', email: 'azalillah@utm.my'},
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS52)', name: 'Encik Azari Bin Mat Yasir', email:'b-azarimy@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS51)', name: 'Sr Dr. Azizah Bte Ismail', email: 'azizahismail@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PEMBANTU TADBIR (P/O) (NA19)', name: 'Azizi Bin Jelani', email: 'azizijelani@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti alam bina & ukur', position: 'PENSYARAH KANAN (DS52)', name: 'Encik Azman Bin Ariffin', email: 'azmanariffin@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Sekolah kejuruteraan elektrik', position: 'PENSYARAH KANAN (DS52)', name: 'Tpr. Chau Loon Wai', email: 'lwchau@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Sekolah kejuruteraan elektrik', position: 'PROFESOR MADYA (DS54)', name: 'Prof. Madya Dr. Choong Weng Wai', email: 'cwengwai@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Sekolah kejuruteraan elektrik', position: 'PENSYARAH KANAN (DS51)', name: 'Dr. Doris Toe Hooi Chyee', email: 'doristhchyee@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Pejabat pentadbiran', position: 'TIMBALAN PENDAFTAR (NA52)', name: 'Abdul Jalil Bin Maulani', email: 'ajalil@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Pejabat pentadbiran', position: 'PEMBANTU TADBIR (P/O) KANAN KUP (NA22)', name: 'Abdul Razak Bin Hamzah', email: 'razakhamzah@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Pejabat pentadbiran', position: 'PEN. PEGAWAI TEKNOLOGI MAKLUMAT (FA29)', name: 'Encik Ahmad Fadzly Bin Rahmat', email: 'aszali@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Pejabat pentadbiran', position: 'PENOLONG PEGAWAI SAINS (CA29)', name: 'Encik Anisham Bin Mohd Dom', email: 'anisham@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Pejabat pentadbiran', position: 'PENOLONG JURUTERA (J29)', name: 'Encik Anuar Bin Aspuri', email: 'anuaraspuri@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti kejuruteraan', position: 'PEMBANTU TADBIR (P/O) (NA19)', name: 'Hamidah Binti Hassan', email: 'meed@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti kejuruteraan', position: 'PEMBANTU OPERASI (N11)', name: 'Norman Zairie Bin Rosle', email: 'norman@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Fakulti kejuruteraan', position: 'PEN. PEGAWAI TEKNOLOGI MAKLUMAT (FA29)', name: 'Encik Salimi Bin Ismail', email: 'salimi@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Sekolah kejuruteraan awam', position: 'PEMBANTU OPERASI (N11)', name: 'Abu Bakar Bin Saan', email: 'abakarsaan@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Sekolah kejuruteraan awam', position: 'PENOLONG JURUTERA (J29)', name: 'Encik Afif Bin Ab Rahman', email: 'afif@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Sekolah kejuruteraan kimia & kejuruteraan tenaga', position: 'PENSYARAH KANAN (DS51)', name: ' Prof. Madya Issham Bin Ismail', email: 'issham@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Sekolah kejuruteraan kimia & kejuruteraan tenaga', position: 'PENSYARAH KANAN (DS52)', name: 'Dr. Jamarosliza Binti Jamaluddin', email: 'jamarosliza@utm.my'}, 
    {university: 'University Teknologi Malaysia', department: 'Sekolah kejuruteraan kimia & kejuruteraan tenaga', position: 'PENSYARAH KANAN (DS52)', name: 'Dr. Jasman Bin Zainal', email: 'jasman@utm.my'}, 
    {university: 'Mara University of Technology', department: 'ART & DESIGN-Art Trivium', position: 'Senior Lecturer', name: 'Noriza Arzain', email: 'noriz896@uitm.edu.my'}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Printing Technolgy ', position: 'Associate Professor ', name: 'Siti Farhana Zakaria (Assoc. Prof. Dr.) ', email: ' farha981@uitm.edu.my'}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Printing Technolgy ', position: 'Senior Lecturer ', name: ' Mohd Khairul Azahari Abdul Rani (Dr)', email: 'mohdk173@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Programme Coordinator ', position: 'Ketua Pusat Pengajian (Pengajian Pasca Siswazah) | Head of Study Centre (Postgraduate Studies) ', name: 'Rosita Mohd Tajuddin (Assoc. Prof. Ts. Dr.) ', email: ' rositatajuddin@uitm.edu.my'}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Programme Coordinator ', position: 'Koordinator Program (Asas Seni) | Programme Coordinator (Art Trivium) ', name: 'Rosita Mohd Tajuddin (Assoc. Prof. Ts. Dr.) ', email: ' syafril_amir@uitm.edu.my'}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Art Trivium ', position: 'Associate Professor ', name: 'Mumtaz Mokhtar (Assoc. Prof. Dr.) ', email: 'mumtazmikaeil@gmail.com '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Art Trivium ', position: 'Senior Lecturer ', name: 'Khairul Zikri Abdullah ', email: 'zikri@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Textile Design ', position: 'Senior Lecturer ', name: 'Ummi Zinnirah Mohd Yusof ', email: 'ummiz215@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Textile Design ', position: ' Lecturer', name: ' Siti Hernida Mohd Som', email: 'hernida58@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Creative Game Design ', position: 'Lecturer ', name: 'Mohd Hafnidzam Adzmi ', email: 'hafnidzam@gmail.com '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Creative Game Design ', position: 'Lecturer', name: ' Fatimah Zahra Ros Azman', email: 'fatimahzahra@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Industrial Ceramic ', position: 'Senior Lecturer', name: 'Oskar Hasdinor Hassan (Assoc. Prof. Dr.-Ing.) ', email: 'oskar@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Industrial Ceramic ', position: 'Senior Lecturer', name: 'Zuraidy Abd Rahim', email: 'zuraidy@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Contemporary Metal Design ', position: 'Senior Lecturer ', name: 'Nazirah Mohamad Baai ', email: 'nazir858@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Contemporary Metal Design ', position: 'Lecturer ', name: 'Syed Mohd Faisal Syed Ahmad ', email: 'syedfaisal@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Graphic Design ', position: 'Associate Professor ', name: ' Sharkawi Che Din (Assoc. Prof. Dr. Ts.)', email: 'sharkawi237@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Graphic Design ', position: 'Senior Lecturer ', name: 'Jamizan Jalaluddin@Mohd Rashid ', email: 'jamiz553@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Fashion Design ', position: 'Associate Professor ', name: 'Rosita Mohd Tajuddin (Assoc. Prof. Ts. Dr.) ', email: 'rositatajuddin@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Fashion Design ', position: 'Senior Lecturer ', name: 'Asliza Aris (Dr.) ', email: 'arisasliza@uitm.edu.my '}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Creative Photomedia ', position: 'Senior Lecturer ', name: 'Shahirman Sahalan (Hj.) ', email: ' shahirman@uitm.edu.my'}, 
    {university: 'Mara University of Technology ', department: 'ART & DESIGN-Creative Photomedia ', position: 'Lecturer ', name: 'Syaripah Mohaizah Sayed Mothar ', email: ' syari602@uitm.edu.my'},
    {university: 'International Islamic University Malaysia', department: 'AHMAD IBRAHIM KULLIYYAH OF LAWS', position: 'Professor', name: 'Nik Ahmad Kamal Bin Nik Mahmod', email: 'nahmad@iium.edu.my'},
    {university: 'International Islamic University Malaysia ', department: 'SULTAN AHMAD SHAH MEDICAL CENTRE @ IIUM ', position: ' Pharmacist', name: 'Che Rokiah Binti Ismail ', email: ' crokiah@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: 'SULTAN AHMAD SHAH MEDICAL CENTRE @ IIUM ', position: ' Medical Officer', name: 'Chng Kay Ly ', email: 'chngkayly@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: 'ACADEMIC MANAGEMENT AND ADMISSIONS DIVISION ', position: 'Administrative Officer ', name: ' Jamilah Bt. Saidin', email: 'sjamilah@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: 'ACADEMIC MANAGEMENT AND ADMISSIONS DIVISION ', position: ' Information Technology Officer', name: 'Nur Fazira binti Alaluddin ', email: 'nurfazira@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: 'AHMAD IBRAHIM KULLIYYAH OF LAWS ', position: ' Professor', name: 'Puteri Nemie Bt. Jahn Kassim ', email: ' nemie@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: 'AHMAD IBRAHIM KULLIYYAH OF LAWS ', position: 'Associate Professor ', name: 'Abdul Rani Bin Kamarudin ', email: ' rani@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: 'CENTRE FOR COMMUNITY ENGAGEMENT AND SERVICES ', position: ' Administrative Officer', name: 'Mohd. Hakimi Bin Mohd. Badrol Afandi ', email: ' hakimi@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: 'CENTRE FOR FOUNDATION STUDIES ', position: ' Matriculation Lecturer', name: 'Kasim Bin Ramli ', email: ' rkasim@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: ' CENTRE FOR ISLAMISATION', position: 'Administrative Officer ', name: 'Faizal Kamal Bin Mohamed ', email: ' faizalk@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: ' CENTRE FOR ISLAMISATION', position: 'Office Secretary ', name: 'Masita Binti Mohamed Taib ', email: 'mtmasita@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: 'CENTRE FOR LANGUAGES AND PRE-UNIVERSITY ACADEMIC ', position: ' Assistant Professor', name: 'Mahadi Bin Masoud ', email: ' mardi@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: 'CENTRE FOR LANGUAGES AND PRE-UNIVERSITY ACADEMIC ', position: 'CELPAD Lecturer ', name: 'Marsufah Binti Jalil ', email: ' jmarsufah@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: 'CENTRE FOR POSTGRADUATE STUDIES ', position: 'Assistant Administrative Officer ', name: 'Zazura Bt Zainal Abidin ', email: ' zazura@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: 'CENTRE FOR POSTGRADUATE STUDIES ', position: 'Administrative Officer ', name: 'Salina Bt. Sa-Idul Haj ', email: 'shsalina@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: ' COUNSELLING & CAREER SERVICES CENTRE', position: 'Administrative Officer ', name: 'Huraizah Bt. Mat Hassan @ Mohd. Hassan ', email: ' huraizah@iium.edu.my'}, 
    {university: 'International Islamic University Malaysia ', department: ' COUNSELLING & CAREER SERVICES CENTRE', position: 'Psychology Officer ', name: 'Nordinah Binti Mohd Kassim ', email: 'nordinah@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: ' DEVELOPMENT DIVISION', position: 'Horticulturist ', name: ' Aries Iskandar Muhammed', email: 'ariesaa@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: ' DEVELOPMENT DIVISION', position: ' Quantity Surveyor', name: 'Hazlina Bt. Mazlan ', email: 'mhazlina@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: 'FINANCE DIVISION ', position: ' Finance Officer', name: ' Norhana Bt. Mohd Yunos', email: 'norhana@iium.edu.my '}, 
    {university: 'International Islamic University Malaysia ', department: 'FINANCE DIVISION ', position: ' Accountant', name: ' Zaidi B. Abd Ghani', email: ' zaidi_ag@iium.edu.my'}
];


const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(x[field]);
    } :
    function(x) {
      return x[field];
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  };
};


function clearArrow() {
  let carets = document.getElementsByClassName('caret');
  for (let caret of carets) {
    caret.className = "caret";
  }
}


function toggleArrow(event) {
  let element = event.target;
  let caret, field, reverse;
  if (element.tagName === 'SPAN') {
    caret = element.getElementsByClassName('caret')[0];
    field = element.id
  }
  else {
    caret = element;
    field = element.parentElement.id
  }

  let iconClassName = caret.className;
  clearArrow();
  if (iconClassName.includes(caretUpClassName)) {
    caret.className = `caret ${caretDownClassName}`;
    reverse = false;
  } else {
    reverse = true;
    caret.className = `caret ${caretUpClassName}`;
  }

  tableData.sort(sort_by(field, reverse));
  populateTable();
}


function populateTable() {
  table.innerHTML = '';
  for (let data of tableData) {
    let row = table.insertRow(-1);
    let university = row.insertCell(0);
    university.innerHTML = data.university;

    let department = row.insertCell(1);
    department.innerHTML = data.department;

    let position = row.insertCell(2);
    position.innerHTML = data.position;

    let name = row.insertCell(3);
    name.innerHTML = data.name;

    let email = row.insertCell(4);
    email.innerHTML = data.email;
  }

  filterTable();
}


function filterTable() {
  let filter = input.value.toUpperCase();
  rows = table.getElementsByTagName("TR");
  let flag = false;

  for (let row of rows) {
    let cells = row.getElementsByTagName("TD");
    for (let cell of cells) {
      if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
        if (filter) {
          cell.style.backgroundColor = 'yellow';
        } else {
          cell.style.backgroundColor = '';
        }

        flag = true;
      } else {
        cell.style.backgroundColor = '';
      }
    }

    if (flag) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

    flag = false;
  }
}


populateTable();

let tableColumns = document.getElementsByClassName('table-column');

for (let column of tableColumns) {
  column.addEventListener('click', function(event) {
    toggleArrow(event);
  });
}

input.addEventListener('keyup', function(event) {
  filterTable();
});