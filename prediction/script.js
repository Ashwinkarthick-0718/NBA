function displayData1() {
  fetch('dataset/amcs.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData2() {
  fetch('dataset/automobile.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData3() {
  fetch('dataset/biomedical.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}

function displayData4() {
  fetch('dataset/biotech.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}

function displayData5() {
  fetch('dataset/civil.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData6() {
    fetch('dataset/cse.json')
      .then(response => response.json())
      .then(data => {
        const s1 = data.s1;
        const s2 = data.s2;
        const s3 = data.s3;
        const s4 = data.s4;
        const s5 = data.s5;
        const s6 = data.s6;
        const s7 = data.s7;
        const s8 = data.s8;
        const s9 = data.s9;
        const s10 = data.s10;

        document.getElementById('Title1').style.background = "#e7edf0";
        document.getElementById('Author1').style.background = "#e7edf0";
        document.getElementById('Publisher1').style.background = "#e7edf0";
        document.getElementById('AccessNo1').style.background = "#e7edf0";
        const TitleElement1 = document.getElementById('Title1');
        const AuthorElement1 = document.getElementById('Author1');
        const publisherElement1 = document.getElementById('Publisher1');
        const AccessNoElement1 = document.getElementById('AccessNo1');
        TitleElement1.textContent = s1.Title;
        AuthorElement1.textContent = s1.Author;
        publisherElement1.textContent = s1.Publisher;
        AccessNoElement1.textContent = s1.AccessNo;


        document.getElementById('Title2').style.background = "#e7edf0";
        document.getElementById('Author2').style.background = "#e7edf0";
        document.getElementById('Publisher2').style.background = "#e7edf0";
        document.getElementById('AccessNo2').style.background = "#e7edf0";
        const TitleElement2 = document.getElementById('Title2');
        const AuthorElement2 = document.getElementById('Author2');
        const publisherElement2 = document.getElementById('Publisher2');
        const AccessNoElement2 = document.getElementById('AccessNo2');
        TitleElement2.textContent = s2.Title;
        AuthorElement2.textContent = s2.Author;
        publisherElement2.textContent = s2.Publisher;
        AccessNoElement2.textContent = s2.AccessNo;
  

        document.getElementById('Title3').style.background = "#e7edf0";
        document.getElementById('Author3').style.background = "#e7edf0";
        document.getElementById('Publisher3').style.background = "#e7edf0";
        document.getElementById('AccessNo3').style.background = "#e7edf0";
        const TitleElement3 = document.getElementById('Title3');
        const AuthorElement3 = document.getElementById('Author3');
        const publisherElement3= document.getElementById('Publisher3');
        const AccessNoElement3 = document.getElementById('AccessNo3');
        TitleElement3.textContent = s3.Title;
        AuthorElement3.textContent = s3.Author;
        publisherElement3.textContent = s3.Publisher;
        AccessNoElement3.textContent = s3.AccessNo;
  
        
        document.getElementById('Title4').style.background = "#e7edf0";
        document.getElementById('Author4').style.background = "#e7edf0";
        document.getElementById('Publisher4').style.background = "#e7edf0";
        document.getElementById('AccessNo4').style.background = "#e7edf0";
        const TitleElement4 = document.getElementById('Title4');
        const AuthorElement4 = document.getElementById('Author4');
        const publisherElement4 = document.getElementById('Publisher4');
        const AccessNoElement4 = document.getElementById('AccessNo4');
        TitleElement4.textContent = s4.Title;
        AuthorElement4.textContent = s4.Author;
        publisherElement4.textContent = s4.Publisher;
        AccessNoElement4.textContent = s4.AccessNo;
  

        document.getElementById('Title5').style.background = "#e7edf0";
        document.getElementById('Author5').style.background = "#e7edf0";
        document.getElementById('Publisher5').style.background = "#e7edf0";
        document.getElementById('AccessNo5').style.background = "#e7edf0";
        const TitleElement5 = document.getElementById('Title5');
        const AuthorElement5 = document.getElementById('Author5');
        const publisherElement5 = document.getElementById('Publisher5');
        const AccessNoElement5 = document.getElementById('AccessNo5');
        TitleElement5.textContent = s5.Title;
        AuthorElement5.textContent = s5.Author;
        publisherElement5.textContent = s5.Publisher;
        AccessNoElement5.textContent = s5.AccessNo;
  

        document.getElementById('Title6').style.background = "#e7edf0";
        document.getElementById('Author6').style.background = "#e7edf0";
        document.getElementById('Publisher6').style.background = "#e7edf0";
        document.getElementById('AccessNo6').style.background = "#e7edf0";
        const TitleElement6 = document.getElementById('Title6');
        const AuthorElement6 = document.getElementById('Author6');
        const publisherElement6 = document.getElementById('Publisher6');
        const AccessNoElement6 = document.getElementById('AccessNo6');
        TitleElement6.textContent = s6.Title;
        AuthorElement6.textContent = s6.Author;
        publisherElement6.textContent = s6.Publisher;
        AccessNoElement6.textContent = s6.AccessNo;
  

        document.getElementById('Title7').style.background = "#e7edf0";
        document.getElementById('Author7').style.background = "#e7edf0";
        document.getElementById('Publisher7').style.background = "#e7edf0";
        document.getElementById('AccessNo7').style.background = "#e7edf0";
        const TitleElement7 = document.getElementById('Title7');
        const AuthorElement7 = document.getElementById('Author7');
        const publisherElement7 = document.getElementById('Publisher7');
        const AccessNoElement7 = document.getElementById('AccessNo7');
        TitleElement7.textContent = s7.Title;
        AuthorElement7.textContent = s7.Author;
        publisherElement7.textContent = s7.Publisher;
        AccessNoElement7.textContent = s7.AccessNo;
  

        document.getElementById('Title8').style.background = "#e7edf0";
        document.getElementById('Author8').style.background = "#e7edf0";
        document.getElementById('Publisher8').style.background = "#e7edf0";
        document.getElementById('AccessNo8').style.background = "#e7edf0";
        const TitleElement8 = document.getElementById('Title8');
        const AuthorElement8 = document.getElementById('Author8');
        const publisherElement8 = document.getElementById('Publisher8');
        const AccessNoElement8 = document.getElementById('AccessNo8');
        TitleElement8.textContent = s8.Title;
        AuthorElement8.textContent = s8.Author;
        publisherElement8.textContent = s8.Publisher;
        AccessNoElement8.textContent = s8.AccessNo;
  


        document.getElementById('Title9').style.background = "#e7edf0";
        document.getElementById('Author9').style.background = "#e7edf0";
        document.getElementById('Publisher9').style.background = "#e7edf0";
        document.getElementById('AccessNo9').style.background = "#e7edf0";
        const TitleElement9 = document.getElementById('Title9');
        const AuthorElement9 = document.getElementById('Author9');
        const publisherElement9 = document.getElementById('Publisher9');
        const AccessNoElement9 = document.getElementById('AccessNo9');
        TitleElement9.textContent = s9.Title;
        AuthorElement9.textContent = s9.Author;
        publisherElement9.textContent = s9.Publisher;
        AccessNoElement9.textContent = s9.AccessNo;
  


        document.getElementById('Title10').style.background = "#e7edf0";
        document.getElementById('Author10').style.background = "#e7edf0";
        document.getElementById('Publisher10').style.background = "#e7edf0";
        document.getElementById('AccessNo10').style.background = "#e7edf0";
        const TitleElement10 = document.getElementById('Title10');
        const AuthorElement10 = document.getElementById('Author10');
        const publisherElement10 = document.getElementById('Publisher10');
        const AccessNoElement10 = document.getElementById('AccessNo10');
        TitleElement10.textContent = s10.Title;
        AuthorElement10.textContent = s10.Author;
        publisherElement10.textContent = s10.Publisher;
        AccessNoElement10.textContent = s10.AccessNo;



      });
  }
  


  function displayData7() {
  fetch('dataset/ece.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;

    });
}


function displayData8() {
  fetch('dataset/eee.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}



function displayData9() {
  fetch('dataset/fashion.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData10() {
  fetch('dataset/ice.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}



function displayData11() {
  fetch('dataset/it.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}



function displayData12() {
  fetch('dataset/mech.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData13() {
  fetch('dataset/metallurgy.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData14() {
  fetch('dataset/production.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData15() {
  fetch('dataset/research.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData16() {
  fetch('dataset/robotics.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;



    });
}


function displayData17() {
  fetch('dataset/textile.json')
    .then(response => response.json())
    .then(data => {
      const s1 = data.s1;
      const s2 = data.s2;
      const s3 = data.s3;
      const s4 = data.s4;
      const s5 = data.s5;
      const s6 = data.s6;
      const s7 = data.s7;
      const s8 = data.s8;
      const s9 = data.s9;
      const s10 = data.s10;

      document.getElementById('Title1').style.background = "#e7edf0";
      document.getElementById('Author1').style.background = "#e7edf0";
      document.getElementById('Publisher1').style.background = "#e7edf0";
      document.getElementById('AccessNo1').style.background = "#e7edf0";
      const TitleElement1 = document.getElementById('Title1');
      const AuthorElement1 = document.getElementById('Author1');
      const publisherElement1 = document.getElementById('Publisher1');
      const AccessNoElement1 = document.getElementById('AccessNo1');
      TitleElement1.textContent = s1.Title;
      AuthorElement1.textContent = s1.Author;
      publisherElement1.textContent = s1.Publisher;
      AccessNoElement1.textContent = s1.AccessNo;


      document.getElementById('Title2').style.background = "#e7edf0";
      document.getElementById('Author2').style.background = "#e7edf0";
      document.getElementById('Publisher2').style.background = "#e7edf0";
      document.getElementById('AccessNo2').style.background = "#e7edf0";
      const TitleElement2 = document.getElementById('Title2');
      const AuthorElement2 = document.getElementById('Author2');
      const publisherElement2 = document.getElementById('Publisher2');
      const AccessNoElement2 = document.getElementById('AccessNo2');
      TitleElement2.textContent = s2.Title;
      AuthorElement2.textContent = s2.Author;
      publisherElement2.textContent = s2.Publisher;
      AccessNoElement2.textContent = s2.AccessNo;


      document.getElementById('Title3').style.background = "#e7edf0";
      document.getElementById('Author3').style.background = "#e7edf0";
      document.getElementById('Publisher3').style.background = "#e7edf0";
      document.getElementById('AccessNo3').style.background = "#e7edf0";
      const TitleElement3 = document.getElementById('Title3');
      const AuthorElement3 = document.getElementById('Author3');
      const publisherElement3= document.getElementById('Publisher3');
      const AccessNoElement3 = document.getElementById('AccessNo3');
      TitleElement3.textContent = s3.Title;
      AuthorElement3.textContent = s3.Author;
      publisherElement3.textContent = s3.Publisher;
      AccessNoElement3.textContent = s3.AccessNo;

      
      document.getElementById('Title4').style.background = "#e7edf0";
      document.getElementById('Author4').style.background = "#e7edf0";
      document.getElementById('Publisher4').style.background = "#e7edf0";
      document.getElementById('AccessNo4').style.background = "#e7edf0";
      const TitleElement4 = document.getElementById('Title4');
      const AuthorElement4 = document.getElementById('Author4');
      const publisherElement4 = document.getElementById('Publisher4');
      const AccessNoElement4 = document.getElementById('AccessNo4');
      TitleElement4.textContent = s4.Title;
      AuthorElement4.textContent = s4.Author;
      publisherElement4.textContent = s4.Publisher;
      AccessNoElement4.textContent = s4.AccessNo;


      document.getElementById('Title5').style.background = "#e7edf0";
      document.getElementById('Author5').style.background = "#e7edf0";
      document.getElementById('Publisher5').style.background = "#e7edf0";
      document.getElementById('AccessNo5').style.background = "#e7edf0";
      const TitleElement5 = document.getElementById('Title5');
      const AuthorElement5 = document.getElementById('Author5');
      const publisherElement5 = document.getElementById('Publisher5');
      const AccessNoElement5 = document.getElementById('AccessNo5');
      TitleElement5.textContent = s5.Title;
      AuthorElement5.textContent = s5.Author;
      publisherElement5.textContent = s5.Publisher;
      AccessNoElement5.textContent = s5.AccessNo;


      document.getElementById('Title6').style.background = "#e7edf0";
      document.getElementById('Author6').style.background = "#e7edf0";
      document.getElementById('Publisher6').style.background = "#e7edf0";
      document.getElementById('AccessNo6').style.background = "#e7edf0";
      const TitleElement6 = document.getElementById('Title6');
      const AuthorElement6 = document.getElementById('Author6');
      const publisherElement6 = document.getElementById('Publisher6');
      const AccessNoElement6 = document.getElementById('AccessNo6');
      TitleElement6.textContent = s6.Title;
      AuthorElement6.textContent = s6.Author;
      publisherElement6.textContent = s6.Publisher;
      AccessNoElement6.textContent = s6.AccessNo;


      document.getElementById('Title7').style.background = "#e7edf0";
      document.getElementById('Author7').style.background = "#e7edf0";
      document.getElementById('Publisher7').style.background = "#e7edf0";
      document.getElementById('AccessNo7').style.background = "#e7edf0";
      const TitleElement7 = document.getElementById('Title7');
      const AuthorElement7 = document.getElementById('Author7');
      const publisherElement7 = document.getElementById('Publisher7');
      const AccessNoElement7 = document.getElementById('AccessNo7');
      TitleElement7.textContent = s7.Title;
      AuthorElement7.textContent = s7.Author;
      publisherElement7.textContent = s7.Publisher;
      AccessNoElement7.textContent = s7.AccessNo;


      document.getElementById('Title8').style.background = "#e7edf0";
      document.getElementById('Author8').style.background = "#e7edf0";
      document.getElementById('Publisher8').style.background = "#e7edf0";
      document.getElementById('AccessNo8').style.background = "#e7edf0";
      const TitleElement8 = document.getElementById('Title8');
      const AuthorElement8 = document.getElementById('Author8');
      const publisherElement8 = document.getElementById('Publisher8');
      const AccessNoElement8 = document.getElementById('AccessNo8');
      TitleElement8.textContent = s8.Title;
      AuthorElement8.textContent = s8.Author;
      publisherElement8.textContent = s8.Publisher;
      AccessNoElement8.textContent = s8.AccessNo;



      document.getElementById('Title9').style.background = "#e7edf0";
      document.getElementById('Author9').style.background = "#e7edf0";
      document.getElementById('Publisher9').style.background = "#e7edf0";
      document.getElementById('AccessNo9').style.background = "#e7edf0";
      const TitleElement9 = document.getElementById('Title9');
      const AuthorElement9 = document.getElementById('Author9');
      const publisherElement9 = document.getElementById('Publisher9');
      const AccessNoElement9 = document.getElementById('AccessNo9');
      TitleElement9.textContent = s9.Title;
      AuthorElement9.textContent = s9.Author;
      publisherElement9.textContent = s9.Publisher;
      AccessNoElement9.textContent = s9.AccessNo;



      document.getElementById('Title10').style.background = "#e7edf0";
      document.getElementById('Author10').style.background = "#e7edf0";
      document.getElementById('Publisher10').style.background = "#e7edf0";
      document.getElementById('AccessNo10').style.background = "#e7edf0";
      const TitleElement10 = document.getElementById('Title10');
      const AuthorElement10 = document.getElementById('Author10');
      const publisherElement10 = document.getElementById('Publisher10');
      const AccessNoElement10 = document.getElementById('AccessNo10');
      TitleElement10.textContent = s10.Title;
      AuthorElement10.textContent = s10.Author;
      publisherElement10.textContent = s10.Publisher;
      AccessNoElement10.textContent = s10.AccessNo;

    });
}
